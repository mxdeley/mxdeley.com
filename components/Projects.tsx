"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AllProjects {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function Projects({
  title,
  category,
  description,
  image,
}: AllProjects) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState<AllProjects[]>([]);

  const allProjects = [
    {
      title: "The Future of Technology",
      category: "Software",
      description:
        "An insight into what the future holds for technology, from AI to quantum computing.",
      image: "/placeholder.svg",
    },
    {
      title: "The Beauty of Nature",
      category: "Structures",
      description:
        "Explore the stunning beauty of mother nature and her astonishing creations.",
      image: "/placeholder.svg",
    },
  ];

  useEffect(() => {
    if (selectedCategory === "All") {
      setProjects(allProjects);
    } else {
      setProjects(
        allProjects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);
  return (
    <main className="max-w-5xl mx-auto">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
        <aside className="sticky top-0 flex flex-col gap-4 items-start py-2">
          <Link href={"/projects"}>
            <h2 className="font-semibold mb-4 text-sm">Latest Projects</h2>
          </Link>
          <div className="grid gap-1">
            <Button
              className="font-semibold"
              variant="link"
              onClick={() => setSelectedCategory("Software")}
            >
              Software
            </Button>
            <Button
              className="font-semibold"
              variant="link"
              onClick={() => setSelectedCategory("Structures")}
            >
              Structures
            </Button>
            <div>
              <p className="text-xs text-stone-400">
                Only larger projects are shown, more projects can be shown on
                request.
              </p>
            </div>
          </div>
        </aside>
        <section className="grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Badge className="text-xs" variant="outline">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="relative group">
                  <img
                    alt="Cover image"
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                    height="200"
                    src={project.image}
                    width="200"
                  />
                  <p className="text-gray-500 mt-2">{project.description}</p>
                  <Link className="text-blue-500 hover:underline" href="#">
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
