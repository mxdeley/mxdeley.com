import { GithubIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CV() {
  return (
    <main className="flex min-h-screen flex-col items-center text-sm max-w-4xl mx-auto p-20 space-y-10">
      <div className="flex items-center justify-between w-full">
        <div className="w-2/3 flex flex-col space-y-4">
          <h1 className="font-bold text-lg">Daniel Madeley</h1>
          <div>
            <p className="text-stone-400">
              Experienced engineer working in tech and construction. Skilled in
              FEA/FEM, automation and full stack web development.
            </p>
            <p className="text-stone-400">
              Click{" "}
              <Link href="#" className="text-stone-50">
                here
              </Link>{" "}
              to find out why I believe it is integral to understand both
              industries.
            </p>
          </div>

          <div className="space-y-2 flex flex-col">
            <p className="flex items-center space-x-2 text-stone-400">
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
              <Link href={"https://github.com/mxdeley"}>
                <GithubIcon
                  size={16}
                  className="transform transition duration-500 hover:scale-125 text-stone-400"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
            }
            width={200}
            height={200}
            alt="Logo"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-start w-full text-stone-400">
        <div>
          <h2 className="text-md font-bold text-stone-50">About</h2>
          <p>
            With more than four years of experience as a freelance web
            developer, I&apos;ve honed my skills at my own design studio{" "}
            <Link href="#" className="text-stone-50">
              madeleydesignstudio
            </Link>
            . You can find my preferred tech stack{" "}
            <Link href="#" className="text-stone-50">
              here
            </Link>
            . Additionally, I hold a BEng in civil engineering and have spent
            two years working as a Structural Engineer. I leverage my
            programming capabilities to automate the design process using Python
            scripts. Feel free to check out my preferred libraries{" "}
            <Link href="#" className="text-stone-50">
              here.
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-start w-full text-stone-400">
        <div>
          <h2 className="text-md font-bold text-stone-50">Hobbies</h2>
          <p>• MMA</p>
          <p>• Football</p>
        </div>
      </div>

      <div className="flex justify-start w-full">
        <div className="space-y-2">
          <h2 className="font-bold">Work Experience</h2>
          <div>
            <h3>Austin Partnership</h3>
            <h4 className="text-stone-400">2022-Current</h4>
            <p className="text-stone-400">
              I have designed steel, concrete, masonry, timber and aluminium
              structures to the Eurocodes. I am experienced in Tekla Tedds,
              Structural Designer, StaTiCa, Fisher Fixperience and Hilti. Hand
              and python script calculations. FEA/FEM modelling with OpenSeesPy
              and Gmesh.
            </p>
          </div>
          <div>
            <h3>madeleydesignstudio</h3>
            <h4 className="text-stone-400">2021-Current</h4>
            <p className="text-stone-400">
              I have successfully worked on a diverse range of web development
              projects for my esteemed client base. My primary focus has been
              leveraging the power of Next.js as a full-stack framework.
              However, as the owner of my own studio, I have also dabbled in
              marketing, design, and sales. This multifaceted experience has
              allowed me to gain valuable insights and offer holistic solutions
              to my clients.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <div>
          <h2 className="text-md font-bold">Education</h2>
          <h3>Leeds Beckett</h3>
          <h4 className="text-stone-400">2019-2022</h4>
          <p className="text-stone-400">
            I achieved a 2:1 in civil engineering. Trained as an amateur MMA
            fighter.
          </p>
        </div>
      </div>
      <div>
        <p className="text-stone-400">
          Explore my insightful{" "}
          <Link href="#" className="text-stone-50">
            blogs
          </Link>{" "}
          for enlightening perspectives, compelling future aspirations, and
          captivating memoirs from the past.
        </p>
      </div>
    </main>
  );
}
