import CardProducts from "@immu/components/CardProducts";
import ProductExemple from "@immu/assets/products/product__exemple.svg"

export default function Products () {
    return(
        <>
            <div className="w-full min-h-screen px-[3.6rem] pt-[12.6rem] pb-[22rem] flex justify-center">
                <div className="h-full w-[1400px] ">
                    <h1 className="font-bold text-2xl">Aromas da Ester</h1>
                    <div className="mt-[45px] mb-[96px]">
                        <p className="pr-6">
                            A Ideia surgiu através da história de uma das fundadoras da IMMU (Instituto Manancial Mãos Unidas). <br />
                            <br />
                            Depois de passar por momentos difíceis entendemos as dores da vulnerabilidade feminina e decidimos dar as nossas mãos para ajudar outras mulheres na mesma situação. <br />
                            <br />
                            Aromas da Ester é uma forma de demostrar a luta e a liberdade dessas mulheres, depois de passar por essas situações criação desse perfume demonstra a vitória, de uma maneira lúdica é como se essas mulheres agora exalassem um novo perfume da sua melhor versão. Feito pelas mulheres da IMMU para transmitir a força, encorajar e ajuda-las na geração de renda.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-[40px]">

                        {Array.from({ length: 32 }).map((_, index) => (
                            <CardProducts key={index} title={"Exemplo de card"} imageSrc={ProductExemple} price={"00,00"} amount={"quantidade"} essence={"essencia"} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
