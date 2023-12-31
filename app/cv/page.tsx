import { Avatar } from "@/components/ui/avatar";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CV() {
  return (
    <main className="flex min-h-screen flex-col items-center text-sm max-w-4xl mx-auto p-20 space-y-10">
      <div className="flex items-center justify-between w-full">
        <div className="w-2/3 flex flex-col space-y-2">
          <h1 className="font-bold text-lg">Daniel Madeley</h1>
          <p>
            Experienced engineer working in tech and construction. Skilled in
            FEA/FEM and web development.
          </p>
          <p className="flex items-center space-x-2">
            <MapPinIcon size={16} />
            <h3>Cardiff</h3>
          </p>
          <div className="flex justify-start w-full space-x-2">
            <Link href={"https://read.cv/mxdeley"}>
              <Image
                src={"/readcv.svg"}
                height={16}
                width={16}
                alt="readcv"
                className="transform transition duration-500 hover:scale-125"
              />
            </Link>
            <Link href={"https://twitter.com/mxdeley"}>
              <Image
                src={"/xcom.svg"}
                height={16}
                width={16}
                alt="xcom"
                className="transform transition duration-500 hover:scale-125"
              />
            </Link>
            <Link href={"https://bento.me/mxdeley"}>
              <Image
                src={"/bento.svg"}
                height={16}
                width={16}
                alt="xcom"
                className="transform transition duration-500 hover:scale-125"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
          <Avatar>
            <Image
              src={
                "https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              }
              width={200}
              height={200}
              alt="Logo"
            />
          </Avatar>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <div>
          <h2 className="text-md font-bold">About</h2>
          <p>I have over four years experience in </p>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <div>
          <h2 className="text-md font-bold">Work Experience</h2>
          <p>I have over four years experience in </p>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <div>
          <h2 className="text-md font-bold">Education</h2>
          <p>I have over four years experience in </p>
        </div>
      </div>
    </main>
  );
}
