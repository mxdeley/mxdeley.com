import { ResourceCarousel } from "@/components/Resource-Carousel";
import { ResourceCard } from "@/components/ResourceCard";

export default function Resources() {
  return (
    <main className="flex min-h-screen flex-col items-center text-sm max-w-4xl mx-auto p-20 space-y-10">
      <div className="text-stone-400 text-center">
        <h2>
          Hey, check out my favourite resources. I either use these daily or
          plan on using them in the future.
        </h2>
        <p>(Greyscale items are currently not used in my daily stack)</p>
      </div>
      <ResourceCarousel />

      <ResourceCard />
    </main>
  );
}
