"use client"
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@immu/@/components/ui/button';
import logo from '../../assets/logo.png';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src={logo}
              alt="Instituto Manancial Mãos Unidas" 
              width={80}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={pathname === '/' ? 'text-manancial-purple font-semibold ' : `text-gray-700 hover:text-manancial-purple font-semibold transition-colors`}>
            Início
          </Link>
          <Link href="/aboutUs" className={pathname === '/aboutUs' ? 'text-manancial-purple font-semibold ' : "text-gray-700 hover:text-manancial-purple font-semibold transition-colors"}>
            Saiba &#43;
          </Link>
          <Link href="/products" className={pathname === '/products' ? 'text-manancial-purple font-semibold '  : 'text-gray-700 hover:text-manancial-purple font-semibold transition-colors'}>
            Nossos Produtos
          </Link>
          <Button className="bg-manancial-purple hover:bg-manancial-pink text-white">
            Quero Doar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          className="md:hidden text-gray-700 bg-manancial-purple"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-manancial-pink font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="/loja" 
              className="text-gray-700 hover:text-manancial-pink font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loja
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-manancial-pink font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nossos Produtos
            </Link>
            <Button 
              className="bg-manancial-purple hover:bg-manancial-pink text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quero Doar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
