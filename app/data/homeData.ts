
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
import marciane from '../../assets/testimonial/Marciane.jpg'
import edite from '../../assets/testimonial/edite.png'



// Testimonials data
export const testimonials = [
  {
    id: 1,
    image: luciene,
    name: "Luciene",
    age: `${calculateAge(1971)} anos`,
    text: "Tenho mais concentração, ali tem bate papo, tem pintura, aprendemos a pintar pano de prato e a fazer pulseiras. É muito bom estar no instituto.",
    videoUrl: "https://www.youtube.com/shorts/VMlILpDBdl4"
  },
  {
    id: 2,
    image: mLurdes,
    name: "Maria de Lurdes",
    age: `${calculateAge(1959)} anos`,
    text: " A gente entra uma pessoa e saí outra, totalmente1971 renovada. Ali é lugar da gente trabalhar e aprender a fazer as coisas para se manter.",
    videoUrl: "https://www.youtube.com/shorts/EBsWL3H8q9g"
  },
  {
    id: 3,
    image: mariane,
    name: "Mariane",
    age: `${calculateAge(2001)} anos`,
    text: "Meu nome é Mariane , eu faço parte do instituto desde 2022 , desde então eu me sinto outra pessoa , o instituto nos oferece várias atividades como artesanato, arteterapia etc",
    videoUrl: "#"
  },
  {
    id: 4,
    image: marciane,
    name: "Marciane",
    age: `${calculateAge(1982)} anos`,
    text: `
      Peço para que vocês agradeçam, porque estamos vivas e respirando. Podemos
      sentir esse ar maravilhoso que Deus proporcionou para nós  [...]. Então eu já levanto agradecendo à Deus.
    `,
    videoUrl: "https://www.youtube.com/shorts/Cm2Q63Hef-M"
  },
  {
    id: 5,
    image: edite,
    name: "Edite",
    age: `${calculateAge(1980)} anos`,
    text: `
      O Instituto tem nos proporcionado, não
      somente o apoio emocional através da arteterapia, mas tanto para mim quanto para outras
      mulheres tem sido uma válvula de escape e um fortalecimento psicológico.
    `,
    videoUrl: "https://www.youtube.com/watch?v=vWXsfVlbQVg&t=2s"
  },
];

import foto1 from "../../assets/about-section/foto1.png";
import foto2 from "../../assets/about-section/foto2.png";
import foto3 from "../../assets/about-section/foto3.png";
import { calculateAge } from "../utils/calculateAge";

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
