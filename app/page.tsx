import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image src={"/logo.png"} height={200} width={200} alt="Logo" />
      <div className="space-y-2 font-light text-sm">
        <h2 className="max-w-3xl text-center">
          I&apos;m mxdeley, a highly skilled engineer with expertise in both the
          Tech and Construction Industries.
        </h2>
        <h2 className="max-w-2xl text-center">
          I bring a multi-disciplinary approach to my work, ensuring innovative
          solutions and outstanding results.
        </h2>
        <h3 className="text-center underline">My Latest Projects Below</h3>
      </div>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}
