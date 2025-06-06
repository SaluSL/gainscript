import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "react-router";
export function TrainingCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="w-full px-4 flex flex-row items-center gap-4 flex-wrap hover:bg-slate-50 transition-colors duration-200 ease-in-out">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </Card>
  );
}
