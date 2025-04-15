interface ITimeLineSection {
    year: string
    paragraphs: string[];
}
export function TimelineSection ({year, paragraphs}:ITimeLineSection) {
    return(
        <div className="bg-gradient-to-r from-[#f4e9f5] to-white px-10 w-1/2 flex flex-col justify-center gap-[5%]">
            <h1 className="text-[#cba0d1] text-3xl font-bold">{year}</h1>
            {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
            ))}
        </div>
    )
}