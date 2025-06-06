import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import ExerciseAutocomplete from "@/components/exercise-autocomplete";

export function CreateExerciseModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogOverlay>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Dodaj ćwiczenie</DialogTitle>
            <ExerciseAutocomplete />
          </DialogHeader>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
