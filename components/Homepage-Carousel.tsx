"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const Images = [
  { id: 1, path: "/header_1.png" },
  { id: 2, path: "/header_2.png" },
  { id: 3, path: "/header_3.png" },
  { id: 4, path: "/header_4.png" },
  { id: 5, path: "/header_5.png" },
];

export function HomepageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, loop: true })
  );

  return (
    <>
      <div className="space-y-2 font-light text-sm text-stone-400  mb-5">
        <h2 className="max-w-3xl text-center">
          I&apos;m mxdeley, a multi disciplined engineer with expertise in both
          the{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Technology"
            className="font-bold text-stone-50"
          >
            tech
          </Link>{" "}
          and{" "}
          <Link
            href="https://en.wikipedia.org/wiki/construction"
            className="font-bold text-stone-50"
          >
            construction
          </Link>{" "}
          industries.
          {/* I bring a multi-disciplinary approach to my work, ensuring{" "}
          <Link
            href="https://en.wikipedia.org/wiki/innovation"
            className="font-bold text-stone-50"
          >
            innovative
          </Link>{" "}
          solutions and outstanding results. */}
        </h2>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl h-fit"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex items-center justify-center">
          {Images.map((image) => (
            <CarouselItem key={image.id}>
              <div>
                <Card className="border-none rounded-none">
                  <CardContent className="flex items-center justify-center">
                    <Image
                      src={image.path}
                      width={960}
                      height={540}
                      alt="headers"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p className="text-sm text-stone-400">
        My goal is to{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Wikipedia:Merging"
          className="font-bold text-stone-50"
        >
          merge
        </Link>{" "}
        the tech and construction industries.
      </p>

      <p className="text-xs text-stone-400 italic mt-6">
        (Be aware site is still very much under construction but has purposely
        been published with non working and incomplete components.)
      </p>
    </>
  );
}
