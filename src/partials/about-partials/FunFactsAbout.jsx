import parse from "html-react-parser";
import Title from "../Title"

import logoShapeImg from "../../imgs/shapes/logo.svg"
import dotsShapeImg from "../../imgs/shapes/dots.svg"

import languages from "../../data/translation"; 

function FunFactsAbout({ language }) {

    const dataText = languages[language].about.funFactsSection

    const { funFactsData } = dataText
    const funFacts = [
        {
            id: 1,
            fact: funFactsData.funFact1
        },
        {
            id: 2,
            fact: funFactsData.funFact2
        },
        {
            id: 3,
            fact: funFactsData.funFact3
        },
        {
            id: 4,
            fact: funFactsData.funFact4
        },
        {
            id: 5,
            fact: funFactsData.funFact5
        },
        {
            id: 6,
            fact: funFactsData.funFact6
        },
        {
            id: 7,
            fact: funFactsData.funFact7
        }
    ]

    return <section id="fun-facts" className="flex flex-col gap-6">
                <Title name={dataText.title} />

                <div id="container" className="flex justify-between items-center h-[225px] max-xl:h-[325px] max-sm:h-auto">
                    <div className="w-3/4 flex flex-wrap gap-3 max-sm:w-full max-sm:justify-center">
                        {funFacts.map((funFact, i) => <div key={funFact.id} className="text-sm p-2 border border-gray-400 text-gray-400">
                            {parse(funFact.fact)}
                        </div>)}
                    </div>
                    <div className="w-1/4 h-full relative max-sm:hidden">
                        <img src={logoShapeImg} className="absolute bottom-16 left-8" alt="" />
                        <img src={dotsShapeImg} className="absolute left-0 -top-6 w-1/6" alt="" />
                    </div>
                </div>
            </section>
}

export default FunFactsAbout