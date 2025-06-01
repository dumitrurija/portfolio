import WelcomeHome from "../partials/home-partials/welcomeHome.jsx";
import QuoteHome from "../partials/home-partials/QuoteHome.jsx";
import ProjectsHome from "../partials/home-partials/ProjectsHome.jsx";
import SkillsHome from "../partials/home-partials/SkillsHome.jsx";
import AboutHome from "../partials/home-partials/AboutHome.jsx";
import ContactsHome from "../partials/home-partials/ContactsHome.jsx";


function Home({ language }) {
    
    return (
        <>
            <WelcomeHome language={language} />
            <QuoteHome language={language} />
            <ProjectsHome language={language} />
            <SkillsHome language={language} />
            <AboutHome language={language} />
            <ContactsHome language={language} />        
        </>
    )
}

export default Home