import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import languages from "../data/translation"

import parse from "html-react-parser"

function Footer({ language, className }) {

    const dataText = languages[language].footer

    return (
        <footer className={`text-white ${className}`}>
            <hr className="mb-6" />
            <div id="container" className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-6 max-sm:text-center">
                <div id="footer-left" className="flex flex-col gap-3">
                    <div className="flex gap-6 items-center max-sm:justify-center max-sm:flex-col max-sm:gap-0">
                        <Link to="/" className="flex items-center gap-1 font-bold">
                            <h2 className="text-xs">&lt;/&gt;</h2>
                            <h2 className="text-lg">Dima</h2>
                        </Link>
                        <a href="mailto:websitesbydima@gmail.com" target="_blank" className="text-gray-400">
                            websitesbydima@gmail.com
                        </a>
                    </div>
                    <div>
                        {dataText.title}
                    </div>
                </div>

                <div id="footer-right" className="w-1/5 flex flex-col gap-3 max-sm:w-full max-sm:items-center">
                    <h3 className="text-2xl">{dataText.heading}</h3>
                    <div className="flex gap-4 text-xl text-gray-400">
                        <a href="https://t.me/dumitrurija" target="_blank" className="hover:text-white">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a href="mailto:websitesbydima@gmail.com" target="_blank" className="hover:text-white">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://github.com/dumitrurija" target="_blank" className="hover:text-white">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                </div>
            </div>

            <div id="container" className="mt-10 text-center text-gray-400">
                {parse(dataText.copyright)}
            </div>
        </footer>
    )
}

export default Footer