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
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl h-fit"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex items-center justify-center px-0 py-0">
          {Images.map((image) => (
            <CarouselItem key={image.id.toString()}>
              <div>
                <Card className="border-none rounded-none">
                  <CardContent className="flex flex-col items-center justify-center">
                    <Image
                      src={image.path}
                      width={1000}
                      height={500}
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
      <div className="space-y-2 font-light text-sm">
        <h2 className="max-w-3xl text-center">
          I&apos;m mxdeley, a multi disciplined{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Engineer"
            className="font-bold"
          >
            engineer
          </Link>{" "}
          with expertise in both the{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Technology"
            className="font-bold"
          >
            tech
          </Link>{" "}
          and{" "}
          <Link
            href="https://en.wikipedia.org/wiki/construction"
            className="font-bold"
          >
            construction
          </Link>{" "}
          industries. I bring a multi-disciplinary approach to my work, ensuring
          innovative solutions and outstanding results. My goal is to merge the
          tech and construction industries.
        </h2>
      </div>
    </>
  );
}
