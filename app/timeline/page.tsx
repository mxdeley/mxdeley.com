import TimelineEvent from "@/components/TimelineEvents";
import Image from "next/image";

export default function Timeline() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <TimelineEvent />
    </main>
  );
}
