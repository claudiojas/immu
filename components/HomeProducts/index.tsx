"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@immu/@/components/ui/carousel";
import { ProductI } from "@immu/types/product";

export default function HomeProducts() {
  const [products, setProducts] = React.useState<ProductI[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");

        console.log(response)

        if (!response.ok) {
          throw new Error("Falha ao carregar os produtos");
        }

        const data = await response.json();
        setProducts(data);
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
  return (
    <section className="p-10 bg-gradient-to-b from-[#3D3D36] to-gray-300">
      <h1>Conheça nossa loja </h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-10">
          {products.map((product: ProductI) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/5 pl-10"
            >
              <div className="p-1 bg-white">
                <span className="text-3xl font-semibold">{product.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
