'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProducts from "../CardProducts";
// import productExemple from "../../assets/products/product__exemple.svg"
import { ProductI } from "@immu/types/product";
import { useEffect, useState } from "react";
import { YampiProduct } from "@immu/types/product.yampi";
import { NextArrow, PrevArrow } from "../ArrowComponents";


export default function HomeProducts() {

  const [products, setProducts] = useState<ProductI[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products?include=skus,images");

        if (!response.ok) {
          throw new Error("Falha ao carregar os produtos");
        }

        const data = await response.json();

        const transformed = data.map((item: YampiProduct) => {
          const variations = item.skus?.data?.[0]?.variations || [];
        
          const essence = variations.find(v => v.name === "ESSÊNCIA")?.value || "";
          const amount = variations.find(v => v.name === "MEDIDA")?.value || "";
        
          return {
            id: item.id,
            title: item.name,
            imageSrc: item.images?.data?.[0]?.thumb?.url || "",
            price: item.skus?.data?.[0]?.price_sale?.toFixed(2) || "0.00",
            amount,
            essence
          };
        });
        
        setProducts(transformed);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido");
        }
      }
    };

    fetchProducts();
  }, []);

  if (error) return <div>{error}</div>;

  const settings = {
    dots: false,
    infinite: products.length > 3, // Só faz loop se houver mais de 3 produtos
    slidesToShow: Math.min(products.length, 3), // Mostra até 3 ou menos se tiver menos produtos
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
          slidesToShow: Math.min(products.length, 2),
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
    <section className="flex flex-col gap-24 py-32 px-12 bg-gradient-to-b from-[#3D3D36] to-gray-300">
      <h1 className="font-semibold text-[40px] text-white">Conheça nossa loja</h1>
      <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="pl-36 h-full flex items-center justify-center">
              <CardProducts
                title={product.title}
                imageSrc={product.imageSrc}
                price={product.price}
                amount={product.amount}
                essence={product.essence}
              />
            </div>
          ))}
        </Slider>
    </section>
  );
}
