import Title from "../Title.jsx"

import weatherSiteImg from "../../imgs/work_imgs/weather.png"
import clothesSelectorSiteImg from "../../imgs/work_imgs/clothes.png"
import clothesSiteImg from "../../imgs/work_imgs/todo.png"

import languages from "../../data/translation.js"

function ProjectsHome({ language }) {
    const dataText = languages[language].home.projectsSection

    const {projectsData} = dataText
    const projects = [
        {
            id: 1,
            img: clothesSelectorSiteImg,
            alt: "image of " + projectsData.project1.name,
            name: projectsData.project1.name,
            description: projectsData.project1.description,
            url: "https://avocati-chisinau.com"
        },
        {
            id: 2,
            img: weatherSiteImg,
            alt: "image of " + projectsData.project2.name,
            name: projectsData.project2.name,
            description: projectsData.project2.description,
            url: "https://dumitrurija.github.io/weather-app/"
        },
        {
            id: 3,
            img: clothesSiteImg,
            alt: "image of " + projectsData.project3.name,
            name: projectsData.project3.name,
            description: projectsData.project3.description,
            url: "https://dumitrurija.github.io/todo"
        }
    ]

    return <section id="projects" className="flex flex-col gap-6">
                <Title name={dataText.title} length="w-full" viewAllLink="/projects" currentLanguage={dataText.viewAll} />

                <div id="container" className="flex gap-4 justify-between max-md:justify-center max-md:h-[300px] max-sm:flex-col max-sm:h-auto">
                    {projects.map((project, i) => {
                        return (
                            <a key={project.id} href={project.url} target="_blank" className="border border-gray-400 text-white w-1/3 max-md:h-full max-sm:w-full">
                                <img className="h-52 w-full object-cover max-md:h-1/3" src={project.img} alt={project.alt} />
                                <div className="p-4 flex flex-col gap-3 max-md:h-2/3 max-md:justify-between">
                                    <h3 className="text-xl">{project.name}</h3>
                                    <p className="text-gray-400">{project.description}</p>
                                    <button className="w-fit text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition">{dataText.buttonText}</button>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>
}

export default ProjectsHome