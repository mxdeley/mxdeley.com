"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Images = [
  { id: 1, path: "/r1.png" },
  { id: 2, path: "/r2.png" },
  { id: 3, path: "/r3.png" },
  { id: 4, path: "/r4.png" },
  { id: 5, path: "/r1.png" },
];

export function ResourceCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, loop: true })
  );

  return (
    <>
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
    </>
  );
}
