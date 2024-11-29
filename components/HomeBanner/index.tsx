import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@immu/@/components/ui/carousel";
import Image from "next/image";

import { banner1, banner2, banner3 } from "@immu/assets";

const carouselItems = [
  {
    image: banner1,
    text: "Primeiro slide",
  },
  {
    image: banner2,
    text: "Segundo slide",
  },
  {
    image: banner3,
    text: "Terceiro slide",
  },
];

export default function HomeBanner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full relative">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width="1500"
                height="500"
                className="w-full h-[500px] object-cover"
              />
              <p className="absolute top-0 mt-2">{item.text}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
