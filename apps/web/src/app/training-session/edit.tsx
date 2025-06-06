import { CreateExerciseModal } from "@/components/create-exercise-modal";
import { ExerciseCard } from "@/components/exercise-card";
import { Button } from "@/components/ui/button";
import { Plus, Copy } from "lucide-react";
import { useState } from "react";

export default function TrainingSessionEdit() {
  const [createExerciseModalOpen, setCreateExerciseModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>Ćwiczenia</h2>
        <Button variant="ghost" className="sm:max-w-52">
          <div className="flex items-center justify-between gap-2">
            <Copy />
            Skopiuj poprzedni plan
          </div>
        </Button>
      </div>
      <ul>
        <li>
          <ExerciseCard />
        </li>
      </ul>
      <Button
        variant="outline"
        className="sm:max-w-36"
        onClick={() => setCreateExerciseModalOpen(true)}
      >
        <div className="flex items-center justify-between gap-2">
          <Plus />
          Dodaj ćwiczenie
        </div>
      </Button>
      <CreateExerciseModal
        open={createExerciseModalOpen}
        onClose={() => setCreateExerciseModalOpen(false)}
      />
    </div>
  );
}
