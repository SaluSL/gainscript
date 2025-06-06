import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export function ExerciseCard() {
  return (
    <Card className="w-full px-4 flex flex-row items-center gap-4 flex-wrap">
      <CardTitle>Wyciskanie na ławce płaskiej z wąskim chwytem</CardTitle>
      <CardDescription className="text-muted-foreground">
        3x8-12 powtórzeń
      </CardDescription>
    </Card>
  );
}
