import Title from "../Title"

import languages from "../../data/translation.js"

function BreadcrumbsAbout({ language }) {
    const dataText = languages[language].about.breadcrumbsSection

    return <section id="breadcrumbs" className="flex flex-col gap-4">
                <Title name={dataText.title} symbol="/" />
                <p className="text-gray-200">{dataText.description}</p>
            </section>
}

export default BreadcrumbsAbout