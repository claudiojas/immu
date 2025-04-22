"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '../data/homeData';
import { Button } from '@immu/@/components/ui/button';
import { Card, CardContent } from '@immu/@/components/ui/card';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@immu/@/components/ui/navigation-menu';
import { Search, ShoppingCart } from 'lucide-react';

// 🔹 Extrair categorias únicas dos produtos
const categories = Array.from(new Set(products.map((product) => product.category)));

const priceRanges = [
  "Até R$ 50",
  "R$ 50 - R$ 100",
  "R$ 100 - R$ 200",
  "Acima de R$ 200"
];

const Products = () => {

    // 🔹 Filtros adicionados
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // 🔹 Estado para paginação
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12; // Número de produtos por página
  
    // 🔹 Produtos duplicados para simular mais dados
    const expandedProducts = [...products, ...products].map((product, index) => ({
      ...product,
      id: index + 1
    }));
  
    // 🔹 Função de filtro combinando busca, categoria e faixa de preço
    const filteredProducts = expandedProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
  
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
  
      const matchesPrice = selectedPriceRange
        ? (selectedPriceRange === "Até R$ 50" && product.price <= 50) ||
          (selectedPriceRange === "R$ 50 - R$ 100" && product.price > 50 && product.price <= 100) ||
          (selectedPriceRange === "R$ 100 - R$ 200" && product.price > 100 && product.price <= 200) ||
          (selectedPriceRange === "Acima de R$ 200" && product.price > 200)
        : true;
  
      return matchesSearch && matchesCategory && matchesPrice;
    });
  
    // 🔹 Função para limpar os filtros e mostrar todos os produtos
    const clearFilters = () => {
      setSelectedCategory(null);
      setSelectedPriceRange(null);
      setSearchTerm('');
    };

    // 🔹 Lógica para exibir os produtos da página atual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // 🔹 Funções de navegação de página
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 py-8 px-4">
          {/* ... banner mantido como está ... */}
  
          <div className="container mx-auto">
            {/* 🔹 Adicionado controle de filtro no menu de navegação */}
            <div className="hidden md:flex justify-between items-center mb-6">
              {/* 🔹 Botão para "Ver todos os produtos" */}
              <Button
                variant="outline"
                onClick={clearFilters}
                className="text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white mb-4"
              >
                Ver todos os produtos
              </Button>
  
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-white hover:bg-gray-100">Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {categories.map((category) => (
                          <li key={category} className="hover:bg-manancial-light p-2 rounded-md">
                            <NavigationMenuLink asChild>
                              <button
                                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-manancial-pink w-full text-left"
                              >
                                {category}
                              </button>
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
                              <button
                                onClick={() => setSelectedPriceRange(range === selectedPriceRange ? null : range)}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-manancial-pink w-full text-left"
                              >
                                {range}
                              </button>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
  
              {/* 🔹 Campo de busca com estado controlado */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar produtos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-manancial-purple focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
  
            {/* 🔹 Grid de produtos usando produtos filtrados */}
            <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {currentProducts.map((product) => (
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
                        {product.category || "Categoria"}
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
  
            {/* ... Paginação e rodapé mantidos ... */}
            <div className="flex justify-center mt-8">
                <Button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="mr-4 text-manancial-purple bg-transparent hover:bg-transparent border-none"
                >
                Anterior
                </Button>
                <span className="self-center text-manancial-purple font-medium">
                    Página {currentPage} de {Math.ceil(filteredProducts.length / productsPerPage)}
                </span>
                <Button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                    className="mr-4 text-manancial-purple bg-transparent hover:bg-transparent border-none"
                >
                    Próxima
                </Button>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
export default Products;
