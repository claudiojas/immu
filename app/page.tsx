// import { HomeBanner, HomeProducts, Testimonials } from "@immu/components/index";
// import { AbountProject } from "@immu/components/SectionAboutProject";

import HeroSection from "@immu/components/sections/HeroSection";
import { carouselSlides, features, projectDescription } from "./data/homeData";
import AboutSection from "@immu/components/sections/AboutSection";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <HomeBanner />  
        <AbountProject />
        <HomeProducts />
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
        </main>


        
      </div>
    </>
  );
}

