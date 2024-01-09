"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PaginationComponent } from "./Pagination";
import { useState, useEffect } from "react";
import allBlogs from "@/content/blogs/blogs.json";

interface AllBlogs {
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
}: AllBlogs) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState<AllBlogs[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    if (selectedCategory === "All") {
      setProjects(allBlogs);
    } else {
      setProjects(
        allBlogs.filter((blog) => blog.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    if (selectedCategory === "All") {
      setProjects(allBlogs.slice(start, end));
    } else {
      setProjects(
        allBlogs
          .filter((blog) => blog.category === selectedCategory)
          .slice(start, end)
      );
    }
  }, [selectedCategory, currentPage]);

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
          <Button
            className={`font-semibold ${
              selectedCategory === "All" ? "text-white" : "text-stone-400"
            }`}
            variant="link"
            onClick={() => setSelectedCategory("All")}
          >
            All Blogs
          </Button>
          <Button
            className={`font-semibold ${
              selectedCategory === "Technology"
                ? "text-white"
                : "text-stone-400"
            }`}
            variant="link"
            onClick={() => setSelectedCategory("Technology")}
          >
            Technology
          </Button>
          <Button
            className={`font-semibold ${
              selectedCategory === "Marketing" ? "text-white" : "text-stone-400"
            }`}
            variant="link"
            onClick={() => setSelectedCategory("Marketing")}
          >
            Marketing
          </Button>

          <Button
            className={`font-semibold ${
              selectedCategory === "Software" ? "text-white" : "text-stone-400"
            }`}
            variant="link"
            onClick={() => setSelectedCategory("Software")}
          >
            Software
          </Button>

          <Button
            className={`font-semibold ${
              selectedCategory === "Structures"
                ? "text-white"
                : "text-stone-400"
            }`}
            variant="link"
            onClick={() => setSelectedCategory("Structures")}
          >
            Structures
          </Button>

          <Button
            className={`font-semibold ${
              selectedCategory === "Life Hacks"
                ? "text-white"
                : "text-stone-400"
            }`}
            variant="link"
            onClick={() => setSelectedCategory("Life Hacks")}
          >
            Life Hacks
          </Button>
        </div>
      </aside>
      <div className="container w-full mx-auto px-4 md:px-6 gap-10 items-start">
        <section className="grid grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-stone-950">
              <CardHeader className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-stone-50">
                  {project.title}
                </h3>
                <Badge className="text-xs text-stone-400" variant="outline">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="relative group">
                  <Image
                    alt="Cover image"
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                    height={200}
                    src={project.image}
                    width={200}
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
      <PaginationComponent
        totalItems={allBlogs.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}

// export default function Blog() {
//   return (
//     <main className="flex min-h-screen flex-col items-center text-sm max-w-7xl mx-auto p-20 space-y-10 text-stone-400">
//       <div className="max-w-2xl mx-auto">
//         <p className="text-sm text-center mb-6">
//           Welcome to the blog, the space where I share my insights and
//           experiences gained from building projects, as well as my expert
//           opinions on industry advancements.
//         </p>
//         <Image
//           src={"/blog_image.png"}
//           width={960}
//           height={540}
//           alt="Blog Image"
//         />
//       </div>
//       <aside className="sticky top-0 flex gap-4 items-start">
//         <div className="flex ">
//           <Button className="font-semibold text-stone-400" variant="link">
//             Technology
//           </Button>
//           <Button className="font-semibold text-stone-400" variant="link">
//             Marketing
//           </Button>
//           <Button className="font-semibold text-stone-400" variant="link">
//             Software
//           </Button>
//           <Button className="font-semibold text-stone-400" variant="link">
//             Structures
//           </Button>
//           <Button className="font-semibold text-stone-400" variant="link">
//             Life Hacks
//           </Button>
//         </div>
//       </aside>
//       <div className="container w-full mx-auto px-4 md:px-6 gap-10 items-start">
//         <section className="grid grid-cols-3 gap-6 md:gap-8">
//           <Card>
//             <CardHeader className="flex items-center justify-between">
//               <h3 className="text-xl font-bold">The Future of Technology</h3>
//               <Badge className="text-xs" variant="outline">
//                 Technology
//               </Badge>
//             </CardHeader>
//             <CardContent>
//               <div className="relative group">
//                 <img
//                   alt="Cover image"
//                   className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//                 <p className="text-gray-500 mt-2">
//                   An insight into what the future holds for technology, from AI
//                   to quantum computing.
//                 </p>
//                 <Link className="text-blue-500 hover:underline" href="#">
//                   Read more
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex items-center justify-between">
//               <h3 className="text-xl font-bold">The Future of Technology</h3>
//               <Badge className="text-xs" variant="outline">
//                 Technology
//               </Badge>
//             </CardHeader>
//             <CardContent>
//               <div className="relative group">
//                 <img
//                   alt="Cover image"
//                   className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//                 <p className="text-gray-500 mt-2">
//                   An insight into what the future holds for technology, from AI
//                   to quantum computing.
//                 </p>
//                 <Link className="text-blue-500 hover:underline" href="#">
//                   Read more
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex items-center justify-between">
//               <h3 className="text-xl font-bold">The Future of Technology</h3>
//               <Badge className="text-xs" variant="outline">
//                 Technology
//               </Badge>
//             </CardHeader>
//             <CardContent>
//               <div className="relative group">
//                 <img
//                   alt="Cover image"
//                   className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//                 <p className="text-gray-500 mt-2">
//                   An insight into what the future holds for technology, from AI
//                   to quantum computing.
//                 </p>
//                 <Link className="text-blue-500 hover:underline" href="#">
//                   Read more
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex items-center justify-between">
//               <h3 className="text-xl font-bold">The Beauty of Nature</h3>
//               <Badge className="text-xs" variant="outline">
//                 Nature
//               </Badge>
//             </CardHeader>
//             <CardContent>
//               <div className="relative group">
//                 <img
//                   alt="Cover image"
//                   className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//                 <p className="text-gray-500 mt-2">
//                   Explore the stunning beauty of mother nature and her
//                   astonishing creations.
//                 </p>
//                 <Link className="text-blue-500 hover:underline" href="#">
//                   Read more
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//         </section>
//       </div>
//       <PaginationComponent />
//     </main>
//   );
// }
