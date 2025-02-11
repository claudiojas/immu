import Image from "next/image";

import { photo2021, photo2022, photo2023, photo2024 } from "@immu/assets";

export default function About() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold my-10">Quem Somos Nós</h1>
      <div className="flex flex-col border-l-4 border-l-[#DB8CE8] mb-20">
        <div className="flex gap-[10%] mb-10">
          <div className="bg-gradient-to-r from-[#f4e9f5] to-white px-10 w-1/2 flex flex-col justify-center gap-[5%]">
            <h1 className="text-[#cba0d1] text-3xl font-bold">2021</h1>
            <p>
              Os atendimentos ofertados no Instituto Manancial Mãos Unidas
              (IMMU) para as Assistidas quando iniciamos eram terapêuticos,
              arteterapia, artesanato, jurídico, nutricional, social,
              psicossocial e em grupos de rodas de conversas.
            </p>
            <p>
              Dentre nossos valores estão a Ética, Justiça, Honestidade,
              Sororidade, Solidariedade, Responsabilidade Social e
              Comprometimento com a transformação da realidade das pessoas que
              acolhemos.
            </p>
            <p>
              Tudo isso para contribuir para a mudança de vida pessoal, social e
              financeira das mulheres que atendemos em situação de
              vulnerabilidade e risco social.
            </p>
            <p>
              Salientamos que além do acolhimento, é possível encontrar no IMMU
              uma rede de apoio que auxilia na capacitação para gerar renda e
              trazer independência em todas as áreas de sua vida, além de
              contribuir para a auto estima delas.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={photo2021}
              width={700}
              height={700}
              alt="Ester (fundadora do IMMU)."
              className="w-full rounded-lg"
            />
            <p className="my-5">
              <strong>Foto 1:</strong> {"Ester (fundadora do IMMU)."}
            </p>
          </div>
        </div>

        <div className="flex gap-[10%]">
          <div className="bg-gradient-to-r from-[#f4e9f5] to-white px-10 w-1/2 flex flex-col justify-center gap-[5%]">
            <h1 className="text-[#DB8CE8] text-3xl font-bold">2022</h1>
            <p>
              Em Dois Mil e Vinte Dois demos continuidade nas atividades com as
              Assistidas, potencializando a rede de apoio e os projetos em
              execução ofertados.
            </p>
            <p>
              Nesse mesmo ano também alcançamos outra conquista. Tivemos
              oportunidade de receber um prêmio de 15 mil reais de um concurso
              da &quot;Cuida de quem cuida&quot;, do Espírito Santo, cujo o
              objetivo era a capacitação de mulheres empreendedoras. Quem
              patrocinou essa aceleração foi a Nívea e ajudou na administração
              do prêmio, com isso foi possível contribuir com obras para a
              reforma do IMMU.
            </p>
            <p>
              Além disso a Nívea também deu brindes para o piquenique de final
              de ano para as mulheres do Instituto.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={photo2022}
              width={700}
              height={700}
              alt="Foto 1 (direita para esquerda): Brindes do piquenique de final de ano, patrocinado pela Nívea. Foto 2: Projeto de Inglês para crianças e adolescentes. Foto 3: Atendimento  em grupo com nutricionista, Projeto Vida. Foto 4: Atendimento com a psicologa no IMMU."
              className="w-full rounded-lg"
            />
            <p className="my-5">
              <strong>Foto 1, direita para esquerda:</strong> Brindes do
              piquenique de final de ano, patrocinado pela Nívea.
              <strong>Foto 2:</strong> Projeto de Inglês para crianças e
              adolescentes. <strong>Foto 3:</strong> Atendimento em grupo com
              nutricionista, Projeto Vida. <strong>Foto 4:</strong> Atendimento
              com a psicologa no IMMU.
            </p>
          </div>
        </div>

        <div className="flex gap-[10%] my-10">
          <div className="bg-gradient-to-r from-[#f4e9f5] to-white px-10 w-1/2 flex flex-col justify-center gap-[5%]">
            <h1 className="text-[#DB8CE8] text-3xl font-bold">2023</h1>
            <p>
              Percebendo a necessidade de ampliação dos projetos para contribuir
              com a independência das Assistidas e capacitação das mesmas,
              ampliamos mais um pouco, e iniciamos os cursos profissionalizantes
              na área de gastronomia, beleza e artesanato.
            </p>
            <p>
              Foram criadas várias oficinas de artesanatos que contribuíram e
              potencializaram a renda de muitas mulheres. Sendo uma das fontes
              de renda do IMMU, através da confecção de produtos expostos nas
              feiras, além do brechó solidário.
            </p>
            <p>
              Além disso fomos convidados para de falar sobre a importância do
              empreendedorismo para mulheres no programa Estúdio 360, da TV
              Capixaba.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={photo2023}
              width={700}
              height={700}
              alt="Foto 1 (direita para esquerda): Tratamento de pele feito no IMMU. Foto 2:  Primeira aparição na TV, onde foi levado os produtos confeccionados nas oficinas. Foto 3: Realização do curso de gastronomia."
              className="w-full rounded-lg"
            />
            <p className="my-5">
              <strong>Foto 1, direita para esquerda:</strong> Tratamento de pele
              feito no IMMU. <strong>Foto 2:</strong> Primeira aparição na TV,
              onde foi levado os produtos confeccionados nas oficinas.{" "}
              <strong>Foto 3:</strong> Realização do curso de gastronomia.
            </p>
          </div>
        </div>

        <div className="flex gap-[10%]">
          <div className="bg-gradient-to-r from-[#f4e9f5] to-white px-10 w-1/2 flex flex-col justify-center gap-[5%]">
            <h1 className="text-[#DB8CE8] text-3xl font-bold">2024</h1>
            <p>
              Os atendimentos ofertados no Instituto Manancial Mãos Unidas
              (IMMU) para as Assistidas quando iniciamos eram terapêuticos,
              arteterapia, artesanato, jurídico, nutricional, social,
              psicossocial e em grupos de rodas de conversas.
            </p>
            <p>
              Dentre nossos valores estão a Ética, Justiça, Honestidade,
              Sororidade, Solidariedade, Responsabilidade Social e
              Comprometimento com a transformação da realidade das pessoas que
              acolhemos.
            </p>
            <p>
              Tudo isso para contribuir para a mudança de vida pessoal, social e
              financeira das mulheres que atendemos em situação de
              vulnerabilidade e risco social.
            </p>
            <p>
              Salientamos que além do acolhimento, é possível encontrar no IMMU
              uma rede de apoio que auxilia na capacitação para gerar renda e
              trazer independência em todas as áreas de sua vida, além de
              contribuir para a auto estima delas.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={photo2021}
              width={700}
              height={700}
              alt="Ester (fundadora do IMMU)."
              className="w-full rounded-lg"
            />
            <p className="my-5">
              <strong>Foto 1:</strong> {"Ester (fundadora do IMMU)."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
