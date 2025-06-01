import BreadCrumbsProjects from "../partials/projects-partials/BreadcrumbsProjects.jsx"
import WorksProjects from "../partials/projects-partials/WorksProjects.jsx"
import SmallProjects from "../partials/projects-partials/SmallProjects.jsx"

function Projects({ language }) {

    return (
        <>
            <BreadCrumbsProjects language={language} />
            <WorksProjects language={language} />
            <SmallProjects language={language} />
        </>
    )
}

export default Projects