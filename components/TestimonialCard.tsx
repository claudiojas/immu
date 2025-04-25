import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

type TestimonialCardProps = {
  image: string | StaticImageData;
  name: string;
  age?: string;
  text: string;
  videoUrl?: string;
};

const TestimonialCard = ({ image, name, age, text, videoUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-rose-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center max-w-sm transition-transform hover:scale-[1.02] duration-300 border border-rose-100">
      {/* Foto Redonda */}
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-rose-200 shadow-inner">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>

      {/* Nome e idade */}
      <h3 className="text-xl font-medium text-rose-900 mb-1">
        {name}{age && <span className="text-rose-600 text-base">, {age}</span>}
      </h3>

      {/* Texto com ícone de citação */}
      <div className="relative px-4">
        <FaQuoteLeft className="absolute left-0 top-0 text-rose-300 text-sm" />
        <p className="text-rose-700 italic text-sm leading-relaxed mt-4">
          {text}
        </p>
      </div>

      {/* Link para vídeo */}
      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block bg-manancial-purple text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-manancial-pink transition-colors"
        >
          Assista o vídeo de {name.split(' ')[0]}
        </a>
      )}
    </div>
  );
};

export default TestimonialCard;
