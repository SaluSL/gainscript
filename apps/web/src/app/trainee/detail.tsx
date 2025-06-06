import { CreateExerciseModal } from "@/components/create-exercise-modal";
import { ExerciseCard } from "@/components/exercise-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrainingCard } from "@/components/training-card";
import { Link } from "react-router";

export default function Trainee() {
  const [createExerciseModalOpen, setCreateExerciseModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Tabs defaultValue="trainings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trainings">Treningi</TabsTrigger>
          <TabsTrigger value="progress">Progres</TabsTrigger>
          <TabsTrigger value="parameters">Parametry</TabsTrigger>
        </TabsList>
        <TabsContent value="trainings">
          <div className="flex flex-col gap-4 mt-3">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-semibold">Nadchodzące</h2>
              <Button variant="outline" className="sm:max-w-36" asChild>
                <Link to="/create-training/<trainee-id>">
                  <div className="flex items-center justify-between gap-2">
                    <Plus />
                    Dodaj trening
                  </div>
                </Link>
              </Button>
            </div>

            <Link to="/training-session/<training-id>">
              <TrainingCard title="Trening nóg" description="23.04.2025" />
            </Link>

            <div className="flex flex-col gap-4 mt-3">
              <h2 className="text-lg font-semibold">Archiwalne</h2>
              <TrainingCard title="Trening pleców" description="20.01.2025" />
              <TrainingCard title="Trening push" description="17.01.2025" />
              <TrainingCard title="Trening pull" description="12.01.2025" />
              <TrainingCard title="Trening legs" description="11.01.2025" />
              <TrainingCard title="Trening cardio" description="05.01.2025" />
            </div>
            <CreateExerciseModal
              open={createExerciseModalOpen}
              onClose={() => setCreateExerciseModalOpen(false)}
            />
          </div>
        </TabsContent>
        <TabsContent value="progress">
          Wkrótce dodamy możliwość śledzenia progresu.
        </TabsContent>
        <TabsContent value="parameters">
          Wkrótce dodamy możliwość śledzenia parametrów.
        </TabsContent>
      </Tabs>
    </div>
  );
}
