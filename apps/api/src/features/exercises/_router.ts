import { router } from "../../core/trpc";
import { publicProcedure } from "../../core/trpc";

export const exerciseRouter = router({
  // Example procedure
  hello: publicProcedure.query((opts) => {
    return `hello ${opts.ctx.user?.id ?? "world"}`;
  }),
});
