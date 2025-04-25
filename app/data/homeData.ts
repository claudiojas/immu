
import banner1 from "../../assets/home-banner/banner-1.png";
import banner2 from "../../assets/home-banner/banner-2.svg";
import banner3 from "../../assets/home-banner/banner-3.svg";

// Carousel slides data
export const carouselSlides = [
  {
    id: '01',
    image: banner1.src,
    title: "Instituto Manancial Mãos Unidas",
    subtitle: "Organização não governamental feita para apoiar mulheres e criar oportunidades para um futuro melhor e com dignidade."
  },
  {
    id: '02',
    image: banner2.src,
    title: "Transformando vidas",
    subtitle: "Oferecemos arte-terapia, artesanato e atendimento em grupo para apoiar mulheres em situação de vulnerabilidade."
  },
  {
    id: '03',
    image: banner3.src,
    title: "Nossos produtos",
    subtitle: "Conheça os produtos artesanais criados pelas mulheres do nosso instituto e ajude a transformar vidas."
  }
];

import luciene from '../../assets/testimonial/Luciene Foto.jpg'
import mLurdes from '../../assets/testimonial/Maria de Lurdes Foto.jpg'
import mariane from '../../assets/testimonial/Mariane Foto.jpg'


import productExemple from '../../assets/products/product__exemple.svg'

// Products data
export const products = [
  {
    id: 1,
    image: productExemple,
    title: "Perfume de Ambiente Vanilla",
    description: "1 litro",
    price: 69.90,
    category: "Casa"
  },
  {
    id: 2,
    image: productExemple,
    title: "Perfume de Ambiente Lavanda",
    description: "1 litro",
    price: 69.90,
    category: "Casa"
  },
  {
    id: 3,
    image: productExemple,
    title: "Perfume de Ambiente Morango",
    description: "1 litro",
    price: 69.90,
    category: "Beleza"
  },
  {
    id: 4,
    image: productExemple,
    title: "Perfume de Ambiente Flor de Laranjeira",
    description: "1 litro",
    price: 69.90,
    category: "Casa"
  },
  {
    id: 5,
    image: productExemple,
    title: "Creme Hidratante de Mãos",
    description: "300g",
    price: 39.90,
    category: "Beleza"
  },
  {
    id: 6,
    image: productExemple,
    title: "Máscara Capilar de Aloe Vera",
    description: "250g",
    price: 49.90,
    category: "Beleza"
  },
  {
    id: 7,
    image: productExemple,
    title: "Detergente Antibacteriano",
    description: "500ml",
    price: 15.90,
    category: "Casa"
  },
  {
    id: 8,
    image: productExemple,
    title: "Desinfetante Lavanda",
    description: "1 litro",
    price: 18.90,
    category: "Casa"
  },
  {
    id: 9,
    image: productExemple,
    title: "Camiseta Feminina de Algodão",
    description: "Tamanho M",
    price: 49.90,
    category: "Roupas"
  },
  {
    id: 10,
    image: productExemple,
    title: "Camiseta Masculina de Algodão",
    description: "Tamanho G",
    price: 49.90,
    category: "Roupas"
  }
];


// Testimonials data
export const testimonials = [
  {
    id: 1,
    image: luciene,
    name: "Luciene",
    age: "45 anos",
    text: "Tenho mais concentração, ali tem bate papo, tem pintura, aprendemos a pintar pano de prato e a fazer pulseiras. É muito bom estar no instituto.",
    videoUrl: "#"
  },
  {
    id: 2,
    image: mLurdes,
    name: "Luciene",
    age: "45 anos",
    text: "Tenho mais concentração, ali tem bate papo, tem pintura, aprendemos a pintar pano de prato e a fazer pulseiras. É muito bom estar no instituto.",
    videoUrl: "#"
  },
  {
    id: 3,
    image: mariane,
    name: "Luciene",
    age: "45 anos",
    text: "Tenho mais concentração, ali tem bate papo, tem pintura, aprendemos a pintar pano de prato e a fazer pulseiras. É muito bom estar no instituto.",
    videoUrl: "#"
  }
];

import foto1 from "../../assets/about-section/foto1.png";
import foto2 from "../../assets/about-section/foto2.png";
import foto3 from "../../assets/about-section/foto3.png";

// Project description
export const projectDescription = {
  title: "Conheça mais sobre o projeto",
  text1: "O Instituto Manancial Mãos Unidas foi fundado por Ester e Lídia, mãe e filha, que têm como objetivo transformar a sociedade em um lugar melhor através da oportunidade.",
  text2: "Iniciaram o trabalho com vinte mulheres com arte terapia, artesanato e atendimento em grupo."
};

// Features with images
export const features = [
  {
    id: 1,
    image: foto1,
  },
  {
    id: 2,
    image: foto2,
  },
  {
    id: 3,
    image: foto3,
  }
];
