import { Button } from "@immu/@/components/ui/button";
import { mosaico } from "@immu/assets";

import { HomeBanner, HomeProducts, Testimonials } from "@immu/components/index";

import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <HomeBanner />

      <section className="flex p-10 justify-center items-center gap-20 my-20">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-3xl font-bold">Conheça mais sobre o projeto</h1>
          <p>
            O Instituto Manancial Mãos Unidas foi fundado por Ester e Lídia, mãe
            e filha, que tem como objetivo transformar a sociedade em um lugar
            melhor através da oportunidade.
          </p>
          <p>
            Iniciaram o trabalho com vinte mulheres com arte terapia,artesanato
            e atendimento em grupo.
          </p>
          <Button size="lg" className="font-bold text-lg bg-[#3D3D37]">
            Quero doar
          </Button>
        </div>
        <Image src={mosaico} width="500" height="400" alt="" className="" />
      </section>

      <HomeProducts />
      <Testimonials />
    </main>
  );
}
