import { router } from "../../core/trpc";
import { addTraineeProcedure } from "./add-trainee.slice";

export const traineeRouter = router({
  addTrainee: addTraineeProcedure,
});
