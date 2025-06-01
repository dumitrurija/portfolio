import { useState } from "react"

import Title from "../Title.jsx"

import lawyerSiteImg from "../../imgs/lawyer-site.jpg"

import adminDashboardSiteImg from "../../imgs/work_imgs/admindashboard.png"
import clothesSiteImg from "../../imgs/work_imgs/clothes.png"
import filterElementsSiteImg from "../../imgs/work_imgs/filterElements.png"
import toDoSiteImg from "../../imgs/work_imgs/todo.png"

import languages from "../../data/translation.js"

function WorksProjects({ language }) {
    const dataText = languages[language].projects.worksSection

    const { projectsData } = dataText
    const projects = [
        {
            id: 1,
            img: adminDashboardSiteImg,
            name: projectsData.project1.name,
            description: projectsData.project1.description,
            url: "https://dumitrurija.github.io/admin-dashboard/"
        },
        {
            id: 2,
            img: clothesSiteImg,
            name: projectsData.project2.name,
            description: projectsData.project2.description,
            url: "https://dumitrurija.github.io/purchaseItem/"
        },
        {
            id: 3,
            img: toDoSiteImg,
            name: projectsData.project3.name,
            description: projectsData.project3.description,
            url: "https://dumitrurija.github.io/todo/"
        },
        {
            id: 4,
            img: lawyerSiteImg,
            name: projectsData.project4.name,
            description: projectsData.project4.description,
            url: "https://avocati-chisinau.com"
        },
        {
            id: 5,
            img: filterElementsSiteImg,
            name: projectsData.project5.name,
            description: projectsData.project5.description,
            url: "https://dumitrurija.github.io/filter-elements/"
        }
    ];

    const [showProjects, setShowProjects] = useState(window.innerWidth < 768 ? 4 : 3)

    const handleShowProjects = () => {
        showProjects === projects.length ? setShowProjects(window.innerWidth < 768 ? 4 : 3) : setShowProjects(projects.length)
    }


    return <section id="works" className="flex flex-col gap-6">
                <Title name={dataText.title} />

                <div id="container" className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {projects.slice(0, showProjects).map((project, i) => 
                        <a href={project.url} key={project.id} className="flex flex-col border border-white w-full h-[350px] max-md:h-auto">
                            <img className="w-full h-[200px] object-cover max-md:h-auto" src={project.img} alt={"image of " + project.name} />
                            <div className="p-4 flex flex-col gap-2 border-t border-white">
                                <h2 className="text-xl">{project.name}</h2>
                                <p className="text-gray-400">{project.description}</p>
                                <button className="w-fit text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition">Live</button>
                            </div>
                        </a>
                    )}
                </div>    

                <button 
                    className="w-fit m-auto text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition"
                    onClick={handleShowProjects}>
                        {showProjects === projects.length ? dataText.buttonShowLess : dataText.buttonShowMore}
                </button>

            </section>


}

export default WorksProjects