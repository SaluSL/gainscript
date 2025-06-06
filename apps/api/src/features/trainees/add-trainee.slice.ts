import { z } from "zod";
import { protectedProcedure } from "../../core/trpc";

// example for now
export const addTraineeProcedure = protectedProcedure
  .input(z.string().nullish())
  .query((opts) => `hello ${opts.input ?? opts.ctx.user?.id ?? "world"}`);
