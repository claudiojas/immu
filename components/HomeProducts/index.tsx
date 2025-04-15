'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProducts from "../CardProducts";
// import productExemple from "../../assets/products/product__exemple.svg"
import { ProductI } from "@immu/types/product";
import { useEffect, useState } from "react";
import { YampiProduct } from "@immu/types/product.yampi";


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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };


  return (
    <section className="pl-[80px] pt-[88px] pb-[181px] bg-gradient-to-b from-[#3D3D36] to-gray-300">
      <h1 className="font-semibold text-[40px] mb-[96px] text-white">Conheça nossa loja</h1>

      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="w-full flex items-center justify-between">
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
