import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface ProjectCardProps {
  title: string;
  description: string;
}

 const projects = [
  {
    "id": 1,
    "title": "1984",
    "description": "Test",
   
  },
  {"id": 2,
    "title": "dewfefzxn",
    "description": "Test",
    
  },
  {
    "id": 3,
    "title": "dewfefzxn",
    "description": "Test",
    
  },
];

export default function ProjectCard() {
  return (
    <>
    {projects.map((project) => (
        <Card className="m-4">
          <CardHeader className="p-4">
             <CardTitle key={project.id} className="text-xl font-bold">{project.title}</CardTitle>
            
            <CardDescription className="text-sm text-gray-500">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <img
              alt="Project thumbnail"
              className="mb-4"
              height="200"
              src="/placeholder.svg"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
              width="300"
            />
        <p className="text-sm">
          Detailed overview of the project, its objectives, the technologies
          used, and the results achieved.
        </p>
        <Badge className="mt-2" variant="secondary">
          React
        </Badge>
        <Badge className="ml-2 mt-2" variant="secondary">
          Node.js
        </Badge>
        <Badge className="ml-2 mt-2" variant="secondary">
          MongoDB
        </Badge>
      </CardContent>
      <CardFooter className="p-4 flex justify-between">
        <a href="#">
          <Button variant="link">Learn more</Button>
        </a>
        <a href="#">
          <Button>View Project</Button>
        </a>
      </CardFooter>
    </Card>
    ))}
    </>
  )
  
}



