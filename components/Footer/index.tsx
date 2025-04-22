import {
  facebook,
  gmail,
  instagram,
  logoIMMU,
  whatsapp
} from "@immu/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2A] text-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Seção 1: Logo e descrição */}
        <div>
          <Image alt="Logo IMMU" src={logoIMMU} width={180} className="mb-4" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Somos uma iniciativa que apoia mulheres em situação de vulnerabilidade, oferecendo apoio, acolhimento e oportunidades para uma vida melhor.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <Image src={facebook} alt="Facebook" width={22} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <Image src={instagram} alt="Instagram" width={22} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <Image src={gmail} alt="Gmail" width={22} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <Image src={whatsapp} alt="WhatsApp" width={22} />
            </a>
          </div>
        </div>

        {/* Seção 2: Navegação */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-zinc-500 pb-2 mb-4">
            Sobre o IMMU
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition"
              >
                Conheça o IMMU
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition"
              >
                Venha fazer parte dessa iniciativa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-300 transition"
              >
                Impacto social
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-300 transition"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-300 transition"
              >
                Como ajudar
              </a>
            </li>
          </ul>
        </div>

        {/* Seção 3: Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-zinc-500 pb-2 mb-4">
            Contato
          </h3>
          <ul className="text-sm space-y-3 text-zinc-400">
            <li>
              <span className="block">Email: contato@immu.org.br</span>
            </li>
            <li>
              <span className="block">WhatsApp: (11) 91234-5678</span>
            </li>
            <li>
              <span className="block">Endereço: São Paulo - SP</span>
            </li>
            <li>
              <span className="block">CNPJ: 46.865.616/0001-26</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-zinc-600 mt-10 pt-4 text-center text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} Instituto Manancial Mãos Unidas — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
