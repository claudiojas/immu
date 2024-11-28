import { Button } from "@immu/@/components/ui/button";
import Image from "next/image";
import { logoIMMU } from "@immu/assets";

export default function Header() {
  return (
    <header className="bg-zinc-100">
      <div className="max-w-screen-xl mx-auto flex justify-between items-end p-5">
        <Image alt="" src={logoIMMU} width={100} />
        <nav>
          <ul className="flex gap-10 items-center font-bold">
            <li className="transition hover:text-zinc-500">Início</li>
            <li className="transition hover:text-zinc-500">Saiba mais</li>
            <li className="transition hover:text-zinc-500">Nossos Produtos</li>
            <li>
              <Button className="bg-[#A457B0] px-4 py-2 text-white rounded-md transition hover:bg-[#4E1B57]">
                Quero doar
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
