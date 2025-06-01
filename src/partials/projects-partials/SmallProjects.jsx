import { useState } from "react";

import Title from "../Title";

import languages from "../../data/translation";

function SmallProjects({ language }) {
    const dataText = languages[language].projects.smallProjectsSection

    const { projectsData } = dataText
    const smallProjects = [
        {
            id: 1,
            name: projectsData.project1.name,
            description: projectsData.project1.description,
            url: "https://dumitrurija.github.io/weather-app/"
        },
        {
            id: 2,
            name: projectsData.project2.name,
            description: projectsData.project2.description,
            url: "https://dumitrurija.github.io/durakHelper/"
        },
        {
            id: 3,
            name: projectsData.project3.name,
            description: projectsData.project3.description,
            url: "https://dumitrurija.github.io/memoryGame/"
        },
        {
            id: 4,
            name: projectsData.project4.name,
            description: projectsData.project4.description,
            url: "https://dumitrurija.github.io/shoe-shop/"
        },
    ];

    const [showSmallProjects, setShowSmallProjects] = useState(window.innerWidth < 768 ? 4 : 3)

    const handleShowSmallProjects = () => {
        showSmallProjects === smallProjects.length ? setShowSmallProjects(3) : setShowSmallProjects(smallProjects.length)
    }

    return <section id="small-projects" className="flex flex-col gap-6 mt-10">
                <Title name={dataText.title} />

                <div id="container" className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {smallProjects.slice(0, showSmallProjects).map((smallProject, i) => 
                        <div key={smallProject.id} className="flex flex-col gap-3 justify-between p-4 border border-white max-md:h-auto">
                            <h2 className="text-xl">{smallProject.name}</h2>
                            <p className="text-gray-400">{smallProject.description}</p>
                            <a href={smallProject.url} target="_blank" className="w-fit text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition">{dataText.buttonText}</a>
                        </div>
                    )}
                </div>

                <button 
                    className="w-fit m-auto text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition"
                    onClick={handleShowSmallProjects}
                >
                    {showSmallProjects === smallProjects.length ? dataText.buttonShowLess : dataText.buttonShowMore}
                </button>
            </section>
}

export default SmallProjects