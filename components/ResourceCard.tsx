"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Link from "next/link";

const Resources = [
  { id: 1, href: "/resources/web_tech_stack", title: "Web Stack" },
  { id: 1, href: "/resources/python_libraries", title: "Python Libraries" },
  { id: 3, href: "/resources/productivity_stack", title: "Productivity Stack" },
  { id: 4, href: "#", title: "Other" },
];

export const ResourceCard = () => {
  return (
    <>
      {Resources.map((resource) => {
        return (
          <Link
            href={resource.href}
            className="w-full flex items-center justify-center"
            key={resource.id}
          >
            <div className="relative flex h-[2rem] w-[30rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 shadow-2xl">
              <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white">
                {resource.title}
              </p>
              <DotPattern
                className={cn(
                  "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
                )}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
};
