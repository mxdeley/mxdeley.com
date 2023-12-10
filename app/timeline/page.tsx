import TimelineEvent from "@/components/TimelineEvents";
import Image from "next/image";

export default function Timeline() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Timeline</h1>
      <TimelineEvent />
    </main>
  );
}
