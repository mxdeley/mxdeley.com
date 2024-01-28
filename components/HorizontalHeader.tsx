"use client";

import React, { useState } from "react";
import {
  BookIcon,
  FolderDotIcon,
  MailIcon,
  MenuIcon,
  MonitorOffIcon,
  PencilIcon,
  ScrollIcon,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";

const HorizontalHeader = () => {
  const isExpanded = useStore((state) => state.isExpanded);
  const toggle = useStore((state) => state.toggle);
  //   const [isExpanded, setIsExpanded] = useState(false);
  const [showIcons, setShowIcons] = useState([false, false, false]);

  const handleClick = () => {
    toggle();
    const newIsExpanded = !isExpanded;
    if (newIsExpanded) {
      setTimeout(() => {
        setShowIcons([true, false, false]);
      }, 250);
      setTimeout(() => {
        setShowIcons([true, true, false]);
      }, 300);
      setTimeout(() => {
        setShowIcons([true, true, true]);
      }, 450);
    } else {
      setShowIcons([false, false, false]);
    }
  };

  const divStyle = isExpanded
    ? { width: "30rem", transition: "width 0.5s ease-in-out" }
    : { width: "48px", transition: "width 0.5s ease-in-out" };

  return (
    <div className="text-white fixed bottom-0 flex mx-auto justify-center w-full pb-6 z-50">
      <div
        className="h-12 w-full flex justify-center items-center border border-stone-700 rounded-md bg-stone-900 p-2 space-x-10"
        style={divStyle}
      >
        {showIcons[2] && (
          <Link href={"/"}>
            <MonitorOffIcon size={28} />
          </Link>
        )}
        {showIcons[1] && (
          <Link href={"/projects"}>
            <FolderDotIcon size={28} />
          </Link>
        )}
        {showIcons[0] && (
          <Link href={"/blog"}>
            <PencilIcon size={28} />
          </Link>
        )}
        <MenuIcon size={28} onClick={handleClick} className="cursor-pointer" />
        {showIcons[0] && <BookIcon size={28} />}
        {showIcons[1] && <ScrollIcon size={28} />}
        {showIcons[2] && <MailIcon size={28} />}
      </div>
    </div>
  );
};

export default HorizontalHeader;
