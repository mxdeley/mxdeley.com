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
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex items-center justify-center p-0">
        {Images.map((image) => (
          <CarouselItem key={image.id.toString()}>
            <div>
              <Card className="border-none rounded-none">
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={image.path}
                    width={1500}
                    height={1500}
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
  );
}
