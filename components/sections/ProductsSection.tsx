"use client"
import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import { useProducts } from '@immu/contexts/ProductContext';
import Link from 'next/link';

const ProductsSection = () => {
  const { products, error, loading } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  const productsPerSlide = 4; // Para desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;


  if (loading) return <p className='flex items-center justify-center'>Carregando...</p>;
  if (error) return <div>{error}</div>;

  // Para slides no desktop
  const totalSlides = Math.ceil(products.length / productsPerSlide);
  const startIndex = currentIndex * productsPerSlide;
  const visibleProducts = isMobile ? products : products.slice(startIndex, startIndex + productsPerSlide);

  return (
    <section className="py-16 px-4 relative bg-manancial-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#53532F] mb-10 mt-10 md:mt-0 text-left tracking-wide">
          Conheça nossa loja
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
          {visibleProducts.map(product => (
            <Link  key={product.id} href={`/products/${product.id}`}>

              <ProductCard
                image={product.imageSrc}
                title={product.title} 
                description={product.essence}
                price={product.price}
              />

            </Link>
          ))}
        </div>

        {/* Indicator Dots (Desktop only) */}
        {!isMobile && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'bg-manancial-purple scale-110' : 'bg-manancial-purple/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Purple Wave Pattern */}
      {/* <div
        className="absolute md:-top-1 -top-16 left-0 w-full overflow-hidden rotate-180"
        style={{ height: "100px" }}
      >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default ProductsSection;
