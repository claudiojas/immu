import { facebook, gmail, instagram, logoIMMU, whatsapp } from "@immu/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2A]">
      <div className="max-w-screen-xl mx-auto p-5 flex gap-10 items-center">
        <Image alt="" src={logoIMMU} width={180} />
        <div className="w-full text-zinc-300">
          <h1 className="border-b-zinc-500 border-b-[0.5px] w-full font-bold text-xl pb-1">
            Sobre
          </h1>

          <ul className="my-4 font-bold">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-50"
            >
              <li>Conheça o IMMU</li>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-50"
            >
              <li>Venha fazer parte dessa iniciativa</li>
            </a>
          </ul>

          <div className="flex items-center justify-between">
            <p className="text-zinc-400">CNPJ 468656160001 - 26</p>
            <div className="flex gap-5 justify-end items-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt=""
                  src={facebook}
                  width={20}
                  className="transition hover:opacity-50"
                />
              </a>

              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt=""
                  src={instagram}
                  width={20}
                  className="transition hover:opacity-50"
                />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt=""
                  src={gmail}
                  width={20}
                  className="transition hover:opacity-50"
                />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt=""
                  src={whatsapp}
                  width={20}
                  className="transition hover:opacity-50"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
