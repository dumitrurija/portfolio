import BreadcrumbsAbout from "../partials/about-partials/BreadcrumbsAbout.jsx";
import AboutMeAbout from "../partials/about-partials/AboutMeAbout.jsx"
import SkillsAbout from "../partials/about-partials/SkillsAbout.jsx";
import FunFactsAbout from "../partials/about-partials/FunFactsAbout.jsx";

function About({ language }) {
    
    return (
        <>
            <BreadcrumbsAbout language={language} />
            <AboutMeAbout language={language} />
            <SkillsAbout language={language} />
            <FunFactsAbout language={language} />        
        </>
    )
}

export default About