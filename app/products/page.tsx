
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '../data/homeData';
import { Button } from '@immu/@/components/ui/button';
import { Card, CardContent } from '@immu/@/components/ui/card';
import { Checkbox } from '@immu/@/components/ui/checkbox';
import { Collapsible, CollapsibleContent } from '@immu/@/components/ui/collapsible';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@immu/@/components/ui/navigation-menu';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@immu/@/components/ui/pagination';
import { Search, Filter, ChevronDown, ShoppingCart } from 'lucide-react';

// Categorias de produtos
const categories = [
  "Artesanato",
  "Decoração",
  "Acessórios",
  "Vestuário",
  "Brinquedos",
  "Papelaria"
];

// Filtros de preço
const priceRanges = [
  "Até R$ 50",
  "R$ 50 - R$ 100",
  "R$ 100 - R$ 200",
  "Acima de R$ 200"
];

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Expande a lista para incluir mais produtos (duplicando os existentes)
  const expandedProducts = [...products, ...products].map((product, index) => ({
    ...product,
    id: index + 1
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-8 px-4">
        {/* Banner de destaque */}
        <div className="w-full rounded-lg overflow-hidden mb-8 relative bg-manancial-light">
          <div className="absolute inset-0 bg-gradient-to-r from-manancial-purple/20 to-manancial-pink/20"></div>
          <div className="container mx-auto py-12 px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-manancial-purple mb-4">
              Nossos Produtos
            </h1>
            <p className="text-lg max-w-2xl text-gray-700 mb-6">
              Cada produto que você adquire no Instituto Manancial Mãos Unidas 
              tem uma história especial e ajuda a transformar vidas através de nossos projetos sociais.
            </p>
            <Button 
              onClick={() => {
                const productsSection = document.getElementById('products-grid');
                productsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-manancial-pink hover:bg-manancial-purple text-white transition-colors"
            >
              Ver todos os produtos
            </Button>
          </div>
          
          {/* Wave pattern no fundo */}
          <div className="absolute -bottom-1 left-0 w-full overflow-hidden" style={{
            height: "50px"
          }}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto">
          {/* Filtros e barra de pesquisa para desktop */}
          <div className="hidden md:flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-white hover:bg-gray-100">Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {categories.map((category) => (
                          <li key={category} className="hover:bg-manancial-light p-2 rounded-md">
                            <NavigationMenuLink asChild>
                              <a
                                href={`#${category.toLowerCase()}`}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-manancial-pink"
                              >
                                {category}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-white hover:bg-gray-100">Preço</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {priceRanges.map((range) => (
                          <li key={range} className="hover:bg-manancial-light p-2 rounded-md">
                            <NavigationMenuLink asChild>
                              <a
                                href={`#${range.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-manancial-pink"
                              >
                                {range}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar produtos..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-manancial-pink focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Filtros para mobile */}
          <div className="md:hidden mb-6">
            <div className="flex justify-between items-center mb-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-300"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={16} />
                Filtros
                <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-manancial-pink focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            
            <Collapsible open={isFilterOpen}>
              <CollapsibleContent className="p-4 bg-gray-50 rounded-md mb-4">
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-manancial-purple">Categorias</h3>
                  <div className="space-y-2">
                    {categories.slice(0, 4).map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`cat-${category}`} />
                        <label htmlFor={`cat-${category}`} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-manancial-purple">Preço</h3>
                  <div className="space-y-2">
                    {priceRanges.slice(0, 3).map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox id={`price-${range}`} />
                        <label htmlFor={`price-${range}`} className="text-sm cursor-pointer">
                          {range}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Grid de produtos */}
          <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {expandedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden group">
                  <Image 
                    src={product.image}
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute top-3 right-3">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-white text-manancial-purple hover:bg-manancial-pink hover:text-white border-none"
                    >
                      <ShoppingCart size={18} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-manancial-light text-manancial-purple text-xs rounded-full">
                      {categories[Math.floor(Math.random() * categories.length)]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-manancial-purple font-bold text-xl">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Button 
                      variant="outline" 
                      className="text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white transition-colors"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Paginação */}
          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          
          {/* Seção de destaque inferior */}
          <div className="bg-manancial-light p-6 rounded-lg mb-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-manancial-purple mb-4">Produtos com propósito</h2>
                <p className="text-gray-700 mb-6">
                  Nossos produtos são confeccionados com muito carinho por artesãos locais, 
                  gerando renda para famílias e apoiando nossos projetos sociais. Cada compra 
                  ajuda a transformar vidas e fortalecer nossa comunidade.
                </p>
                <Button className="bg-manancial-pink hover:bg-manancial-purple text-white transition-colors">
                  Conheça nossa história
                </Button>
              </div>
              <div className="flex justify-center">
                <Image 
                  src={expandedProducts[0].image} 
                  alt="Instituto Manancial" 
                  className="max-h-60 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
