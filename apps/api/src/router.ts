import { router } from "./core/trpc";
import { traineeRouter } from "./features/trainees/_router";
import { exerciseRouter } from "./features/exercises/_router";
import { workoutRouter } from "./features/workouts/_router";

export const appRouter = router({
  trainee: traineeRouter,
  exercise: exerciseRouter,
  workout: workoutRouter,
});

export type AppRouter = typeof appRouter;
