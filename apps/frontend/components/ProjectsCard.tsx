// components/ProjectCard.tsx
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
}

export function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <Card className="p-4 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

export function Skeleton() {
  return (
    <div className="animate-pulse p-4 bg-gray-300 rounded-2xl h-32 w-full"></div>
  );
}
