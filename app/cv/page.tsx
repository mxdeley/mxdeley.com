import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function CV() {
    return (
      <main className="flex min-h-screen flex-col items-center text-sm max-w-4xl mx-auto p-20">
        <div className="flex items-center justify-between w-full">
            <h1>Name: Daniel Madeley</h1>
            <Avatar>
                <Image src={"/logo.png"} width={40} height={40} alt="Logo"/>
            </Avatar>
        </div>
      </main>
    );
  }
  