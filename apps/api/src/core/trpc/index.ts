import { initTRPC, TRPCError } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { getUserFromAuthHeader } from "./../auth";

const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const user = await getUserFromAuthHeader(req.headers.authorization);
  return {
    user,
  };
};
type Context = Awaited<ReturnType<typeof createContext>>;

export const trpc = initTRPC.context<Context>().create();

export const publicProcedure = trpc.procedure;

export const protectedProcedure = trpc.procedure.use(
  async function isAuthed(opts) {
    const { ctx } = opts;
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return opts.next({
      ctx: {
        user: ctx.user,
      },
    });
  }
);

export const router = trpc.router;

export const trpcExpressMiddleware = (appRouter: ReturnType<typeof router>) =>
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  });
