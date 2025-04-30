'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@immu/@/components/ui/button';
import { Card, CardContent } from '@immu/@/components/ui/card';
import { useProducts } from '@immu/contexts/ProductContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { products, loading, error } = useProducts();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageSrc);
    }
  }, [product]);

  if (loading) return <div className="text-center py-10">Carregando...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-10">Produto não encontrado.</div>;

  // Preparar imagens (por enquanto, apenas imageSrc única)
  const images = product.images?.length ? product.images : [product.imageSrc];

  const handleBack = () => {
    router.push('/products'); // Isso redireciona para a página de produtos
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagens */}
        <div className="flex flex-col gap-4">
          {/* Imagem principal */}
          <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={selectedImage || product.imageSrc}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Miniaturas */}
          <div className="flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded border-2 ${
                  selectedImage === img ? 'border-manancial-purple' : 'border-transparent'
                } overflow-hidden`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informações do Produto */}
        <Card className="flex flex-col justify-between">
          <CardContent className="p-6 space-y-6">
            <div>
              <span className="px-2 py-1 bg-manancial-light text-manancial-purple text-xs rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
              <p className="text-sm text-gray-600 mt-2">Essência: {product.essence}</p>
              <p className="text-sm text-gray-600">Quantidade: {product.amount}</p>
            </div>

            <div className="text-3xl font-bold text-manancial-purple">
              R$ {parseFloat(product.price).toFixed(2)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto bg-manancial-purple hover:bg-manancial-pink text-white">
                Adicionar ao Carrinho
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white"
                onClick={handleBack}
              >
                Voltar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
