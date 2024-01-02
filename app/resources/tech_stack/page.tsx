import Image from "next/image";

export default function TechStack() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto justify-center items-center">
      <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/ui.dark.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Shadcn-UI</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/Prisma.dark.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Prisma</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/payload.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Payload</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/openai.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">OpenAI</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/reactquery.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">React Query</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/tailwindcss.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Tailwind CSS</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/pnpm.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">PNPM</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/turborepo.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Turbo Repo</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/zod.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Zod</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/algolia.svg"} width={120} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Algolia</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/figma.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Figma</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/illustrator.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Illustrator</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/adobe.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Adobe</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/vercel.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Vercel</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/notion.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Notion</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/stripe.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Stripe</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/supabase.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Supabase</h1>
        </div>
      </div>

      {/* Languages */}
      <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/typescript.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Typescript</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/css.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">CSS</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/html5.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">HTML</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/git.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Git</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/javascript.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Javascript</h1>
        </div>{" "}
      </div>
      {/* Runtimes */}
      <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/nodejs.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Node</h1>
        </div>
      </div>
      {/* Frameworks */}
      <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/nextjs.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Nextjs</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/react.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">React</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/docusaurus.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Docusaurus</h1>
        </div>{" "}
      </div>
      {/* Styling & Design Tools */}
      <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
        {" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/ui.dark.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Shadcn-UI</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/tailwindcss.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Tailwind CSS</h1>
        </div>
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/figma3.png"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Figma</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/illustrator.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Illustrator</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image src={"/adobe.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Adobe</h1>
        </div>{" "}
        <div className="flex flex-col items-center h-full justify-center gap-2">
          <Image
            src={"/midjourney.png"}
            width={60}
            height={60}
            alt="shadcn"
            className="bg-white"
          />
          <h1 className="text-stone-400 text-sm">Midjourney</h1>
        </div>{" "}
      </div>

      {/* Extra */}
      {/* <div className="grid grid-cols-5 max-w-7xl mx-auto justify-center items-center">
        <div className="flex flex-col items-center">
          <Image src={"/perplexity.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Pexplexity</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/playwright.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Playwright</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/bash.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Bash</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/go.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Go</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/docker.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Docker</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/npm.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">NPM</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/obsidian.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Obsidian</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/after-effects.svg"}
            width={60}
            height={60}
            alt="shadcn"
          />
          <h1 className="text-stone-400 text-sm">After Effects</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/arc_browser.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Arc Browser</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/astro.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Astro</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/axiom.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Axiom</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/btc.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Bitcoin</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/cal.com.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Cal.com</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/cloudflare.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Cloudflare</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/eth.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Ethereum</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/express.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Express</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/fastapi.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Fast Api</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/mintlify.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Mintlify</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/neon.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Neon</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/netlify.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Netlify</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/opensea.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Opensea</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/photoshop.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Photoshop</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/planetscale.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Planetscale</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/postgresql.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">PostgreSQL</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/premiere.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Premiere</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/python.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Python</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/raycast.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Raycast</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/runway.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Runway</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/rust.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Rust</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/sentry.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Sentry</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/svelte.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Svelte</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/tauri.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Tauri</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image src={"/vim.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Vim</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/vitejs.svg"} width={60} height={60} alt="shadcn" />
          <h1 className="text-stone-400 text-sm">Vite</h1>
        </div>
      </div> */}
    </main>
  );
}
