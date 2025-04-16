'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import { banner1, banner2, banner3 } from "@immu/assets";

interface ICarouselItemsProps {
  image: StaticImageData;
  text: string;
  subText?: string;
}

const carouselItems: ICarouselItemsProps[] = [
  {
    image: banner1,
    text: "Instituto Manancial\nMãos Unidas",
    subText: "Organização não governamental feito\npara apoiar mulheres e criar oportunidades."
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
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="relative w-full pb-6 overflow-hidden">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="w-full relative group">
            <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-all"></div>
            
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={1500}
              height={500}
              className="w-full h-[51.75rem] md:h-[45rem] sm:h-[30rem] object-cover"
            />

            <span className="absolute top-[15.8rem] right-[5.1rem] flex flex-col gap-4 z-10">
              <p className="whitespace-pre-line text-white font-bold font-murecho text-6xl text-right">
                {item.text}
              </p>
              {item.subText && (
                <p className="whitespace-pre-line text-white font-bold font-murecho text-lg text-right">
                  {item.subText}
                </p>
              )}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
