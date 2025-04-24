interface IHeadlineBunnerProps {
    text: string;
    textColor: string;
}

export default function Headline ({ text, textColor }:IHeadlineBunnerProps) {
    return(
        <div className='text-right'>
            <p className='text-[#53532F] text-2xl md:text-5xl'>{text}</p>
            <h1 className={`text-[${textColor}] text-4xl md:text-7xl font-medium`}>Aromas da Ester</h1>
        </div>
    )
}