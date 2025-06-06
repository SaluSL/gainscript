import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Fuse from "fuse.js";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const previousExercises = [
  "Bench Press",
  "Squat",
  "Deadlift",
  "Overhead Press",
  "Pull-up",
  "Barbell Row",
  "Dumbbell Fly",
  "Leg Press",
];

export default function ExerciseAutocomplete() {
  const [value, setValue] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(previousExercises, {
        threshold: 0.4, // how fuzzy (lower = stricter)
      }),
    []
  );

  const filteredExercises = value
    ? fuse.search(value).map((result) => result.item)
    : previousExercises;

  return (
    <div className=" w-full mt-4">
      <Input
        className="w-full"
        placeholder="Enter your exercise"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <ScrollArea className="h-[350px] w-full mt-2">
        <ul className="w-full flex flex-col gap-1.5 mt-2">
          <li>
            <Button variant={"outline"} className="w-full items-center">
              <Plus />
              Dodaj nowe ćwiczenie
            </Button>
          </li>
          {filteredExercises.length > 0 ? (
            filteredExercises.map((exercise) => (
              <li key={exercise} className="w-full">
                <Button className="w-full" variant="outline">
                  <span className="w-full text-start">{exercise}</span>
                </Button>
              </li>
            ))
          ) : (
            <span className="text-center mt-3">No exercises found.</span>
          )}
        </ul>
      </ScrollArea>
    </div>
  );
}
