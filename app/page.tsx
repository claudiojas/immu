import { HomeBanner, HomeProducts, Testimonials } from "@immu/components/index";
import { AbountProject } from "@immu/components/SectionAboutProject";


export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
        <HomeBanner />  
        <AbountProject />
        <HomeProducts />
        <Testimonials />
      </main>
    </>
  );
}
