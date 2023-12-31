import { HomepageCarousel } from "@/components/Homepage-Carousel";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <HomepageCarousel />
      <div className="space-y-2 font-light text-sm">
        <h2 className="max-w-3xl text-center">
          I&apos;m mxdeley, a highly skilled engineer with expertise in both the
          Tech and Construction Industries.
        </h2>
        <h2 className="max-w-2xl text-center">
          I bring a multi-disciplinary approach to my work, ensuring innovative
          solutions and outstanding results.
        </h2>
      </div>
    </main>
  );
}
