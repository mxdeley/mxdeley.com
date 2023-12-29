
"use client"

import Link from "next/link"
import Image from "next/image"
import { KanbanSquare, MailIcon, PenSquareIcon,  ScrollTextIcon } from "lucide-react"
import { usePathname} from "next/navigation"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { ModeToggle } from "./Theme-Toggle"


const NavLinks = [
  { id: 1, name: 'CV', path: '/cv' },
  { id: 2, name: 'Projects', path: '/projects' },
  { id: 3, name: 'Blog', path: '/blog' },
];

export default function VerticalHeader() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <aside className="w-72 h-screen border-r border-stone-50/30 px-6 py-8 fixed flex flex-col top-0 z-50">
    <header className="mb-8">
        <Link href={"/"}>        <Image src={"/logo.png"} width={50} height={50} alt="Logo"/>
</Link>
    </header>
    <nav className="h-full flex flex-col justify-center" >
      <ul className="flex flex-col justify-center space-y-16">
      {NavLinks.map((link) => {
        return (
          <li className="flex justify-end" key={link.id.toString()}>
            <Link href={link.path}
            className={isActive(link.path) ? 'items-center hover:text-stone-50 flex space-x-4 text-stone-50' : 'items-center hover:text-stone-50 flex space-x-4 text-stone-400'}>
              
              <h2 className="text-sm">{link.name}</h2>
              <ScrollTextIcon size={20}/>
              
            </Link>
          </li>
        );
      })}
       <li className="flex justify-end">
    
           <Dialog>
      <DialogTrigger asChild>
        <div className="items-center hover:text-stone-50 text-stone-400 flex space-x-4 hover:cursor-pointer"><h2 className="text-sm">Email</h2>
             <MailIcon size={20}/></div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            {/* <Label htmlFor="link" className="sr-only">
              Link
            </Label> */}
            {/* <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            /> */}
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            {/* <Copy className="h-4 w-4" /> */}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
         </li>
      </ul>
    </nav>
    
    <div className="flex justify-between items-center w-[120px] mx-auto">
      <Link href={"https://read.cv/mxdeley"}>
        <Image src={"/readcv.svg"} height={22} width={22} alt="readcv" className="transform transition duration-500 hover:scale-125"/>
      </Link>
    <Link href={"https://twitter.com/mxdeley"}>
        <Image src={"/xcom.svg"} height={22} width={22} alt="xcom" className="transform transition duration-500 hover:scale-125" />
    </Link>
    <Link href={"https://bento.me/mxdeley"}>
    <Image src={"/bento.svg"} height={22} width={22} alt="xcom" className="transform transition duration-500 hover:scale-125" />
    </Link>
    
   
    </div>
  </aside>
  )
}