"use client"
import { ProjectCard, Skeleton } from "@/components/ProjectsCard";
import { BACKEND_API } from "@/config";
import { useAuth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import axios from "axios";
import { useEffect, useState } from "react";

const dummyProjects = [
  { id: 1, title: "Project One", description: "Description for project one." },
  { id: 2, title: "Project Two", description: "Description for project two." },
  { id: 3, title: "Project Three", description: "Description for project three." },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<typeof dummyProjects>([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects(dummyProjects);
      setLoading(false);
    }, 2000);
  }, []);


  const handle= async () => {
    const response  = await axios.get(`${BACKEND_API}/project`);
  }

  useEffect(()=>{
  })


  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading
        ? Array(3).fill(0).map((_, index) => <Skeleton key={index} />)
        : projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
    </div>
  );
}
