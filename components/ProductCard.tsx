
import { Button } from '@immu/@/components/ui/button';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ProductCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  price: string;
};

const ProductCard = ({ image, title, description, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.03] md:h-[620px] flex flex-col justify-between border border-pink-100 text-manancial-purple">
      <div className="overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={title}
          className="w-full h-[320px] object-cover transition-transform duration-300 hover:scale-105"
          width={500}
          height={320}
        />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold ">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <span className="font-bold text-xl">R$ {price}</span>
          <Button variant="outline" className=" border-pink-300 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors">
            Ver Produto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

