'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTestimonials from "../CardTestimonials";
import imageTestimonialExemple from "../../assets/testimonial/Luciene Foto.jpg";

export default function Testimonials() {
  
  const dataTestimonial = [
    {
      imageTestimonial: imageTestimonialExemple,
      testimonial:
        `Tenho mais concentração, ali tem bate papo, tem pintura, 
        aprendemos a pintar pano de prato e a fazer pulseiras. 
        É muito bom estar no Instituto. Assista o vídeo de Luciene`,
      infoTestimonial: "Assista o vídeo de Luciene",
      name: "Luciene",
      age: "30",
      duration: "2 anos",
    },
    {
      imageTestimonial: imageTestimonialExemple,
      testimonial:
        `Tenho mais concentração, ali tem bate papo, tem pintura, 
        aprendemos a pintar pano de prato e a fazer pulseiras. 
        É muito bom estar no Instituto. Assista o vídeo de Luciene`,
      infoTestimonial: "Assista o vídeo de Luciene",
      name: "Luciene",
      age: "30",
      duration: "2 anos",
    },
    {
      imageTestimonial: imageTestimonialExemple,
      testimonial:
        `Tenho mais concentração, ali tem bate papo, tem pintura, 
        aprendemos a pintar pano de prato e a fazer pulseiras. 
        É muito bom estar no Instituto. Assista o vídeo de Luciene`,
      infoTestimonial: "Assista o vídeo de Luciene",
      name: "Luciene",
      age: "30",
      duration: "2 anos",
    },
    {
      imageTestimonial: imageTestimonialExemple,
      testimonial:
        `Tenho mais concentração, ali tem bate papo, tem pintura, 
        aprendemos a pintar pano de prato e a fazer pulseiras. 
        É muito bom estar no Instituto. Assista o vídeo de Luciene`,
      infoTestimonial: "Assista o vídeo de Luciene",
      name: "Luciene",
      age: "30",
      duration: "2 anos",
    },
  ];

  const settings = {
    dots: false,
    infinite: dataTestimonial.length > dataTestimonial.length ,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: Math.min(3, dataTestimonial.length),
    slidesToScroll: 1,
    arrows: true,
    centerMode: dataTestimonial.length > 3 , 
    centerPadding: dataTestimonial.length > 3 ? "50px" : "0px",
  };
  
  

  return (
    <div className="relative w-full bg-amber-700">
        
      <Slider {...settings} >
      {dataTestimonial.map((testimonialData, index) => (
        <CardTestimonials
          imageTestimonial={testimonialData.imageTestimonial}  // ✅ Agora pega o item certo
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
