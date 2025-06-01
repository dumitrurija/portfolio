import Title from "../Title"

import languages from "../../data/translation"

function BreadcrumbsProjects({ language }) {

    const dataText = languages[language].projects.breadcrumbsSection

    return <section id="breadcrumbs" className="flex flex-col gap-4">
                <Title name={dataText.title} symbol="/" />
                <p className="text-gray-200">{dataText.description}</p>
           </section>
    
}

export default BreadcrumbsProjects