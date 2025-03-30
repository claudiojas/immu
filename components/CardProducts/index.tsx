import { Button } from "@immu/@/components/ui/button";
import Image from "next/image";

interface ICardProductsProps {
    title: string,
    imageSrc: string,
    price: string,
    amount: string,
}

export default function CardProducts({ title, imageSrc, price, amount }: ICardProductsProps) {
    return (
      <div className={`
        flex flex-col gap-[40px]
        bg-white rounded-lg shadow-lg overflow-hidden w-[320px] max-h-[603px] h-[603px] py-[18px] px-[30px]
      `}>
        <Image src={imageSrc} alt={title} className="w-full h-[344px] object-contain" width={400} height={400}/>
        <div className="flex flex-col gap-[14px]">
          <div className="px-[22px]">
            <h3 className="text-[20px] font-bold text-black">{title}</h3>
            <span className="flex gap-1 text-[20px]">
              <h4 className="text-textViolet font-bold">Vanilla</h4>
              <p className="font-bold">-</p>
              <p className="font-medium">{amount}</p>
            </span>
            <span className="flex gap-2 font-medium text-[32px]">
              <h3>R&#36;</h3>
              <p>{price}</p>
            </span>
          </div>

          <Button className="font-bold text-[16px] text-white  bg-orangeButton w-full h-[56px]" >Ver Produto</Button>
        </div>
      </div>
    );
  }