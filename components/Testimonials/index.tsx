/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTestimonials from "../CardTestimonials";
import { dataTestimonial } from "@immu/app/data/testimonials";
import { NextArrow, PrevArrow } from "../ArrowComponents";

export default function Testimonials() {

 
  
  
  const settings = {
    dots: false,
    infinite: dataTestimonial.length > 3, // Só faz loop se houver mais de 3 produtos
    slidesToShow: Math.min(dataTestimonial.length, 3), // Mostra até 3 ou menos se tiver menos produtos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(dataTestimonial.length, 2),
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  
  return (
    <div className="flex w-full h-auto items-center justify-center">
      <div className="flex flex-col w-full h-auto gap-[96px] max-w-[1435px]">

        <h1 className="w-full font-semibold text-black text-3xl font-inter">Depoimentos de nossas mulheres</h1>
        <Slider {...settings} >
            {dataTestimonial.map((testimonialData, index) => (
              <>
                <div className="h-full flex items-center justify-center">
                    <CardTestimonials
                      imageTestimonial={testimonialData.imageTestimonial} 
                      testimonial={testimonialData.testimonial}
                      infoTestimonial={testimonialData.infoTestimonial}
                      name={testimonialData.name}
                      age={testimonialData.age}
                      duration={testimonialData.duration}
                      key={index}
                    />
                </div>
              </>
            ))}
        </Slider>
      </div>
    </div>
  );
}
