'use client'; // Diretiva que marca o arquivo como cliente

import React, { useEffect, useState } from "react";
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


export function HomeBanner () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = carouselItems.length;

  // Função para avançar o carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Loop infinito
  };

  // Função para voltar o carrossel
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    ); // Loop infinito
  };

  // Autoplay
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000); // Passa o slide a cada 3 segundos

    return () => clearInterval(intervalId); // Limpar intervalo ao desmontar
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contêiner do carrossel, com a transição */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            {/* Camada de fundo escurecendo no hover */}
            <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-all"></div>

            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={1500}
              height={500}
              className="w-full h-[51.75rem] md:h-[45rem] sm:h-[30rem] object-cover"
            />

            <span className="absolute top-[15.8rem] right-[5.1rem] flex flex-col gap-4 z-10">
              <p className="whitespace-pre-line text-white font-bold font-murecho text-5xl text-right">{item.text}</p>
              <p className="whitespace-pre-line text-white font-bold font-murecho text-base text-right">{item.subText}</p>
            </span>
          </div> 
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

