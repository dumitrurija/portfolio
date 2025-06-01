import parse from "html-react-parser"

import aboutImg from "../../imgs/about.png"
import dotsShapeImg from "../../imgs/shapes/dots.svg"

import languages from "../../data/translation"

function AboutMeAbout({ language }) {
    const dataText = languages[language].about.aboutMeSection

    return  <section id="about-me" className="flex justify-between items-center max-md:gap-6 max-sm:flex-col">
                <p className="text-gray-400 w-1/2 max-sm:w-full">
                    {parse(dataText.description)}
                </p>
                <div className="w-[285px] relative max-sm:hidden">
                    <img src={aboutImg} className="border-b border-purple-400 w-full" alt='Photo of "Dima" in about page' />
                    <img src={dotsShapeImg} className="absolute top-14 w-1/4" alt="1st decor image of dots, situated behind main photo" />
                    <img src={dotsShapeImg} className="absolute right-8 bottom-32" alt="2nd decor image of dots, situated behind main photo" />
                </div>
            </section>
}

export default AboutMeAbout