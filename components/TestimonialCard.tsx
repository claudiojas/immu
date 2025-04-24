
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TestimonialCardProps = {
  image: string | StaticImageData;
  name: string;
  age?: string;
  text: string;
  videoUrl?: string;
};

const TestimonialCard = ({ image, name, age, text, videoUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-96 justify-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-manancial-light">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}{age && `, ${age}`}</h3>
      <p className="text-gray-600 italic mb-4 text-sm">{text}</p>
      {videoUrl && (
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-manancial-purple hover:text-manancial-pink underline transition-colors"
        >
          Assista o vídeo de {name.split(' ')[0]}
        </a>
      )}
    </div>
  );
};

export default TestimonialCard;
