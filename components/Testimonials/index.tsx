'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTestimonials from "../CardTestimonials";
import { dataTestimonial } from "@immu/app/data/testimonials";

export default function Testimonials() {
  
  const settings = {
    dots: false,
    infinite: dataTestimonial.length > 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: Math.min(3, dataTestimonial.length),
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0px",
  };
  
  
  return (
    <div className="flex flex-1 flex-col w-full h-auto gap-[96px] mb-[224px]">

      <h1 className="w-full font-semibold text-black text-3xl font-inter">Depoimentos de nossas mulheres</h1>
        
      <Slider {...settings} >
        {dataTestimonial.map((testimonialData, index) => (
          <CardTestimonials
            imageTestimonial={testimonialData.imageTestimonial} 
            testimonial={testimonialData.testimonial}
            infoTestimonial={testimonialData.infoTestimonial}
            name={testimonialData.name}
            age={testimonialData.age}
            duration={testimonialData.duration}
            key={index}
          />
        ))}
      </Slider>
    </div>
  );
}
