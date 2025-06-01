import parse from "html-react-parser"

import LinkButton from "../LinkButton.jsx";

import homeImg from "../../imgs/home-img.png"
import logoShapeImg from "../../imgs/shapes/logo.svg"
import dotsShapeImg from "../../imgs/shapes/dots.svg"

import languages from "../../data/translation.js";

function WelcomeHome({ language }) {
    const dataText = languages[language].home.welcomeSection;

    return <section id="welcome" className="flex justify-between items-center max-md:flex-col max-md:gap-6">
                <div id="welcome-left" className="flex flex-col gap-3 max-md:w-full max-md:text-center">
                    <h2 className="text-white text-4xl/12 font-bold max-sm:text-3xl">
                        {dataText.intro} <br />
                        {dataText.jobTitle}
                    </h2>

                    <p className="text-gray-400">
                        {parse(dataText.declaration)}
                    </p>

                    <LinkButton to="/contact">{dataText.buttonText}</LinkButton>
                </div>
                <div id="welcome-right" className="flex flex-col items-center relative">
                    <img src={homeImg} alt='"Photo" of Dima, web developer from Moldova' />
                    <img src={logoShapeImg} className="absolute -z-10 w-1/3 left-4 top-20" alt="Decor image, situated behind Main photo" />
                    <img src={dotsShapeImg} className="absolute bottom-20 w-22 right-2" alt="Decor image, situated behind Main photo" />
                    <div className="w-full text-gray-400 border border-gray-400 p-2 flex gap-2 items-center">
                        <div className="w-[15px] h-[15px] bg-purple-400"></div>
                        <p>{dataText.rightSidePrep}</p>
                        <span className="font-bold text-purple-400">{dataText.rightSideJob}</span>
                    </div>
                </div>
            </section>
}

export default WelcomeHome