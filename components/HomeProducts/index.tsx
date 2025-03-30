'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProducts from "../CardProducts";
import productExemple from "../../assets/products/product__exemple.svg"


export default function HomeProducts() {

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

  const products = [
    {
      id: 1,
      title: 'Perfume  de Ambiente',
      imageSrc: productExemple,
      price: "69,90",
      amount: "1 litro"
    },
    {
      id: 2,
      title: 'Perfume  de Ambiente',
      imageSrc: productExemple,
      price: "69,90",
      amount: "1 litro"
    },
    {
      id: 3,
      title: 'Perfume  de Ambiente',
      imageSrc: productExemple,
      price: "69,90",
      amount: "1 litro"
    },
  
  ];

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
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
