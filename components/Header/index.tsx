'use client';
import { Button } from "@immu/@/components/ui/button";
import Image from "next/image";
import { logoIMMU } from "@immu/assets";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Header() {

  const pathname = usePathname();
  
  return (
    <header className={`${pathname !== '/' ? "bg-backgroundDark" : "bg-white"}`}>
      <div className={`max-w-screen-xl mx-auto flex justify-between items-end p-5`}>
        <Image alt="" src={logoIMMU} width={100} />
        <nav className={`${pathname !== "/" ? "text-white" : "text-textDark"}`}>
          <ul className="flex gap-10 items-center font-bold">
            <li className="transition hover:text-zinc-500">
              <Link href="/">Início</Link>
            </li>
            <li className="transition hover:text-zinc-500">
              <Link href="/quem-somos">Saiba &#43;</Link>
            </li>
            <li className="transition hover:text-zinc-500">
              <Link href="/products">Nossos Produtos</Link>
            </li>
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
