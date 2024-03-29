"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookIcon,
  BookOpenIcon,
  FolderDotIcon,
  FolderOpenDotIcon,
  GithubIcon,
  MailIcon,
  MenuIcon,
  MonitorIcon,
  MonitorOffIcon,
  PencilIcon,
  PencilLineIcon,
  ScrollIcon,
  ScrollTextIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
    iconclosed: <MonitorOffIcon size={20} />,
    icon: <MonitorIcon size={20} />,
  },
  {
    id: 2,
    name: "CV",
    path: "/cv",
    iconclosed: <ScrollIcon size={20} />,
    icon: <ScrollTextIcon size={20} />,
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects",
    iconclosed: <FolderDotIcon size={20} />,
    icon: <FolderOpenDotIcon size={20} />,
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
    iconclosed: <PencilIcon size={20} />,
    icon: <PencilLineIcon size={20} />,
  },
  {
    id: 5,
    name: "Resources",
    path: "/resources",
    iconclosed: <BookIcon size={20} />,
    icon: <BookOpenIcon size={20} />,
  },
];

export default function VerticalHeader() {
  const [isAsideVisible, setAsideVisible] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const handleOpenAside = () => {
    setAsideVisible(true);
    setShowMenuIcon(false);
  };

  const handleCloseAside = () => {
    setAsideVisible(false);
    setTimeout(() => {
      setShowMenuIcon(true);
    }, 700); // match this with the transition duration
  };

  return (
    <>
      {showMenuIcon && !isAsideVisible && (
        <button onClick={handleOpenAside} className="fixed p-2">
          <MenuIcon size={24} className="text-stone-50" />
        </button>
      )}
      <aside
        className={`transform transition-transform duration-700 w-[12rem] h-screen border-r border-stone-50/30 px-4 py-8 fixed flex flex-col top-0 z-50 ${
          isAsideVisible ? "" : "translate-x-[-300px]"
        }`}
      >
        <header className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src={
                "https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              }
              width={40}
              height={40}
              alt="Logo"
              className="rounded-full"
            />
            <h1 className="text-sm text-stone-400">@mxdeley</h1>
          </Link>

          <button onClick={handleCloseAside}>
            <XIcon size={16} className="text-stone-50" />
          </button>
        </header>
        <nav className="h-full flex flex-col justify-center">
          <ul className="flex flex-col justify-center space-y-16">
            {NavLinks.map((link) => {
              return (
                <li className="flex justify-end" key={link.id.toString()}>
                  <Link
                    href={link.path}
                    className={
                      isActive(link.path)
                        ? "items-center hover:text-stone-50 flex space-x-4 text-stone-50"
                        : "items-center hover:text-stone-50 flex space-x-4 text-stone-400"
                    }
                  >
                    <h2 className="text-sm">{link.name}</h2>
                    {isActive(link.path) ? link.icon : link.iconclosed}
                  </Link>
                </li>
              );
            })}
            <li className="flex justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="items-center hover:text-stone-50 text-stone-400 flex space-x-4 hover:cursor-pointer">
                    <h2 className="text-sm">Email</h2>
                    <MailIcon size={20} />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Email Me</DialogTitle>
                    <DialogDescription>
                      Anyone who has this link will be able to view this.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2"></div>
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

        <div className="flex justify-between items-center w-[140px] mx-auto">
          <Link href={"https://read.cv/mxdeley"}>
            <Image
              src={"/readcv.svg"}
              height={22}
              width={22}
              alt="readcv"
              className="transform transition duration-500 hover:scale-125"
            />
          </Link>
          <Link href={"https://twitter.com/mxdeley"}>
            <Image
              src={"/xcom.svg"}
              height={22}
              width={22}
              alt="xcom"
              className="transform transition duration-500 hover:scale-125"
            />
          </Link>
          <Link href={"https://bento.me/mxdeley"}>
            <Image
              src={"/bento.svg"}
              height={22}
              width={22}
              alt="xcom"
              className="transform transition duration-500 hover:scale-125"
            />
          </Link>
          <Link href={"https://github.com/mxdeley"}>
            <GithubIcon
              size={22}
              className="transform transition duration-500 hover:scale-125 text-stone-400"
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
