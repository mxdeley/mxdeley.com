// "use client";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { CardHeader, CardContent, Card } from "@/components/ui/card";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface AllProjects {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
// }

// export default function Projects({
//   title,
//   category,
//   description,
//   image,
// }: AllProjects) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [projects, setProjects] = useState<AllProjects[]>([]);

//   const allProjects = [
//     {
//       title: "The Future of Technology",
//       category: "Software",
//       description:
//         "An insight into what the future holds for technology, from AI to quantum computing.",
//       image: "/placeholder.svg",
//     },
//     {
//       title: "The Beauty of Nature",
//       category: "Structures",
//       description:
//         "Explore the stunning beauty of mother nature and her astonishing creations.",
//       image: "/placeholder.svg",
//     },
//   ];

//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setProjects(allProjects);
//     } else {
//       setProjects(
//         allProjects.filter((project) => project.category === selectedCategory)
//       );
//     }
//   }, [selectedCategory]);
//   return (
//     <main className="max-w-5xl mx-auto">
//       <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
//         <aside className="sticky top-0 flex flex-col gap-4 items-start py-2">
//           <Link href={"/projects"}>
//             <h2 className="font-semibold mb-4 text-sm">Latest Projects</h2>
//           </Link>
//           <div className="grid gap-1">
//             <Button
//               className="font-semibold"
//               variant="link"
//               onClick={() => setSelectedCategory("Software")}
//             >
//               Software
//             </Button>
//             <Button
//               className="font-semibold"
//               variant="link"
//               onClick={() => setSelectedCategory("Structures")}
//             >
//               Structures
//             </Button>
//             <div>
//               <p className="text-xs text-stone-400">
//                 Only larger projects are shown, more projects can be shown on
//                 request.
//               </p>
//             </div>
//           </div>
//         </aside>
//         <section className="grid gap-6 md:gap-8">
//           {projects.map((project, index) => (
//             <Card key={index}>
//               <CardHeader className="flex items-center justify-between">
//                 <h3 className="text-xl font-bold">{project.title}</h3>
//                 <Badge className="text-xs" variant="outline">
//                   {project.category}
//                 </Badge>
//               </CardHeader>
//               <CardContent>
//                 <div className="relative group">
//                   <img
//                     alt="Cover image"
//                     className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
//                     height="200"
//                     src={project.image}
//                     width="200"
//                   />
//                   <p className="text-gray-500 mt-2">{project.description}</p>
//                   <Link className="text-blue-500 hover:underline" href="#">
//                     Read more
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </section>
//       </div>
//     </main>
//   );
// }

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PaginationComponent } from "./Pagination";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center text-sm max-w-7xl mx-auto p-20 space-y-10 text-stone-400">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-center mb-6">
          Welcome to the blog, the space where I share my insights and
          experiences gained from building projects, as well as my expert
          opinions on industry advancements.
        </p>
        <Image
          src={"/projects_1.png"}
          width={960}
          height={540}
          alt="Blog Image"
        />
      </div>
      <aside className="sticky top-0 flex gap-4 items-start">
        <div className="flex ">
          <Button className="font-semibold text-stone-400" variant="link">
            Technology
          </Button>
          <Button className="font-semibold text-stone-400" variant="link">
            Marketing
          </Button>
          <Button className="font-semibold text-stone-400" variant="link">
            Software
          </Button>
          <Button className="font-semibold text-stone-400" variant="link">
            Structures
          </Button>
          <Button className="font-semibold text-stone-400" variant="link">
            Life Hacks
          </Button>
        </div>
      </aside>
      <div className="container w-full mx-auto px-4 md:px-6 gap-10 items-start">
        <section className="grid grid-cols-3 gap-6 md:gap-8">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Future of Technology</h3>
              <Badge className="text-xs" variant="outline">
                Technology
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <p className="text-gray-500 mt-2">
                  An insight into what the future holds for technology, from AI
                  to quantum computing.
                </p>
                <Link className="text-blue-500 hover:underline" href="#">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Future of Technology</h3>
              <Badge className="text-xs" variant="outline">
                Technology
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <p className="text-gray-500 mt-2">
                  An insight into what the future holds for technology, from AI
                  to quantum computing.
                </p>
                <Link className="text-blue-500 hover:underline" href="#">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Future of Technology</h3>
              <Badge className="text-xs" variant="outline">
                Technology
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <p className="text-gray-500 mt-2">
                  An insight into what the future holds for technology, from AI
                  to quantum computing.
                </p>
                <Link className="text-blue-500 hover:underline" href="#">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Beauty of Nature</h3>
              <Badge className="text-xs" variant="outline">
                Nature
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <p className="text-gray-500 mt-2">
                  Explore the stunning beauty of mother nature and her
                  astonishing creations.
                </p>
                <Link className="text-blue-500 hover:underline" href="#">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <PaginationComponent />
    </main>
  );
}
