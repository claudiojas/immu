import { HomeBanner, HomeProducts, Testimonials } from "@immu/components/index";
import { AbountProject } from "@immu/components/SectionAboutProject";


export default function Home() {
  return (
    <>
      <HomeBanner />  
      <main className="max-w-screen-xl mx-auto">
        <AbountProject />
        <HomeProducts />
        <Testimonials />
      </main>
    </>
  );
}
