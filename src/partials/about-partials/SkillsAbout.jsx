import Title from "../Title"

import languages from "../../data/translation"

function SkillsAbout({ language }) {
    const dataText = languages[language].about.skillsSection

    const { skillsData } = dataText
    const skills = [
        {
            id: 1,
            name: skillsData.skill1,
            tools: ["Javascript PHP"]
        },
        {
            id: 2,
            name: skillsData.skill2,
            tools: ["HTML CSS SASS"]
        },
        {
            id: 3,
            name: skillsData.skill3,
            tools: ["Tailwind Bootstrap JQuery"]
        },
        {
            id: 4,
            name: skillsData.skill4,
            tools: ["React Laravel"]
        },
        {
            id: 5,
            name: skillsData.skill5,
            tools: ["MySql MongoDB SQLite"]
        },
    ]

    return <section id="skills" className="flex flex-col gap-6">
                <Title name={dataText.title} />

                <div id="container" className="grid grid-cols-5 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">  
                    {skills.map((skill, i) => <div key={skill.id} className={`border border-white ${skill.id === 5 && 'max-md:col-span-2'}`}>
                        <h2 className="border-b border-white p-2">{skill.name}</h2>
                        <ul className="p-2">
                            {skill.tools.map((tool, i) => <li key={tool} className="text-gray-400">{tool}</li>)}
                        </ul>
                    </div>)}
                </div>
            </section>
}

export default SkillsAbout