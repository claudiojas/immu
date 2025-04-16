import { HomeBanner, HomeProducts, Testimonials } from "@immu/components/index";
import { AbountProject } from "@immu/components/SectionAboutProject";


export default function Home() {
  return (
    <>
      <main className="mx-auto flex flex-1 flex-col gap-[200px] pb-[224px]">
        <HomeBanner />  
        <AbountProject />
        <HomeProducts />
        <Testimonials />
      </main>
    </>
  );
}


// max-w-screen-xl mx-auto flex flex-1 flex-col gap-[212px]