import Title from "../Title.jsx"

import squareShapeImg from "../../imgs/shapes/square.svg"
import logoShapeImg from "../../imgs/shapes/logo.svg"
import dotsShapeImg from "../../imgs/shapes/dots.svg"

import languages from "../../data/translation.js"

function SkillsHome({ language }) {
    const dataText = languages[language].home.skillsSection

    const skills = [
        {
            id: 1,
            name: dataText.skill1.name,
            knowledges: dataText.skill1.knowledges
        },
        {
            id: 2,
            name: dataText.skill2.name,
            knowledges: dataText.skill2.knowledges
        },
        {
            id: 3,
            name: dataText.skill3.name,
            knowledges: dataText.skill3.knowledges
        },
        {
            id: 4,
            name: dataText.skill4.name,
            knowledges: dataText.skill4.knowledges
        },
        {
            id: 5,
            name: dataText.skill5.name,
            knowledges: dataText.skill5.knowledges
        }
    ];

    return <section id="skills" className="flex flex-col gap-6">
                <Title name={dataText.title} length={window.innerWidth < 640 ? "w-full" : "w-1/6"} />

                <div id="container" className="flex justify-between items-center sm:h-[400px] max-sm:flex-col">
                    <div id="skills-left" className="w-1/3 relative h-full max-sm:hidden">
                        <img className="w-10 absolute right-4 bottom-20 max-md:bottom-0" src={squareShapeImg} alt="Decor Image of Square" />
                        <img className="w-20 absolute right-6 top-4" src={squareShapeImg} alt="Decor Image of Square" />
                        <img className="w-14 absolute right-12 bottom-36 max-lg:top-32" src={dotsShapeImg} alt="Decor Image of Dots" />
                        <img className="w-14 absolute left-10 top-12 max-md:left-2" src={dotsShapeImg} alt="Decor Image of Dots" />
                        <img className="w-28 absolute left-12 bottom-32 max-lg:bottom-15" src={logoShapeImg} alt="Decor Image of Logo" />
                    </div>
                    <div id="skills-right" className="w-2/3 h-full pl-12 grid grid-cols-3 gap-4 justify-items-end max-md:grid-cols-2 max-sm:w-full max-sm:p-0">
                        {skills.map((skill, i) => {
                            return (
                                <div key={skill.id} className={`border border-gray-400 text-white w-full ${skill.id === 4 && "lg:col-start-2"} ${skill.id === 5 && "max-lg:col-span-2"}`}>
                                    <h3 className="border-b border-gray-400 p-2 text-white">{skill.name}</h3>
                                    <ul className="p-2 text-gray-400">
                                        {skill.knowledges.map((knowledge, i) => 
                                            <li key={i}>{knowledge}</li>
                                        )}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
}

export default SkillsHome