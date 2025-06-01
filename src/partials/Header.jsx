import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFigma, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import languages from "../data/translation"

import NavMenu from "./NavMenu"

function Header({ language, setLanguage, isMobileMenu, toggleMobileMenu, className }) {
    const dataText = languages[language].header

    // While in Mobile View, changes style accordingly
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <header className={`flex justify-between items-center text-white sticky top-0 z-20 py-6 ${className}`}>
                <div>
                    <Link to="/" className="flex items-center gap-1 font-bold">
                        <h2 className="text-xs">&lt;/&gt;</h2>
                        <h2 className="text-lg">Dima</h2>
                    </Link>
                </div>

                <div>
                    {
                        isMobileView ? 
                        <div onClick={() => toggleMobileMenu(true)}>
                            <FontAwesomeIcon icon={faBars} className="text-xl" />
                        </div> :
                        <NavMenu dataText={dataText} setLanguage={setLanguage} />
                    }
                </div>
            </header>

            {/* Mobile Menu */}
            {
                isMobileMenu && 
                <div id="mobile-menu" className="w-full h-screen py-6 flex flex-col justify-between text-white">
                    <div id="up-menu" className="flex justify-between items-center ">
                        <Link to="/" className="flex items-center gap-1 font-bold">
                            <h2 className="text-xs">&lt;/&gt;</h2>
                            <h2 className="text-lg">Dima</h2>
                        </Link>
                        <FontAwesomeIcon 
                            icon={faXmark} 
                            className="text-xl" 
                            onClick={() => toggleMobileMenu(false)}
                        />
                    </div>

                    <div id="middle-menu" className="w-full">
                        <NavMenu dataText={dataText} setLanguage={setLanguage} isMobileView={isMobileView} toggleMobileMenu={toggleMobileMenu} />
                    </div>

                    <div id="down-menu" className="flex flex-col gap-3 items-center">
                        <Link to="/" className="flex gap-4 text-xl text-gray-400">
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faFigma} />
                            <FontAwesomeIcon icon={faDiscord} />
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Header