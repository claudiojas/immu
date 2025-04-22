// import { Testimonials } from "@immu/components/index";

import HeroSection from "@immu/components/sections/HeroSection";
import { carouselSlides, features, projectDescription } from "./data/homeData";
import AboutSection from "@immu/components/sections/AboutSection";
import ProductsSection from "@immu/components/sections/ProductsSection";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/*
        <Testimonials /> */}

        <main className="flex-1">
            {/* Hero Carousel */}
            <HeroSection slides={carouselSlides} />

            {/* About the Project */}
            <AboutSection 
              title={projectDescription.title}
              text1={projectDescription.text1}
              text2={projectDescription.text2}
              features={features}
            />

            {/* Products Section */}
            <ProductsSection />
            
        </main>


        
      </div>
    </>
  );
}

