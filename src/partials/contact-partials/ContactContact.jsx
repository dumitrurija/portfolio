import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import dotsShapeImg from "../../imgs/shapes/dots.svg"
import logoShapeImg from "../../imgs/shapes/logo.svg"

import languages from "../../data/translation"

function ContactContact({ language }) {
    const dataText = languages[language].contact.contactSection
    const { placeholdersData } = dataText

    return <section id="contact" className="flex justify-between gap-6 max-lg:flex-col max-lg:items-center lg:my-10">
                    <div className="w-1/2 flex flex-col gap-4 relative max-lg:w-full max-lg:items-center max-sm:text-center">
                        <p className="text-gray-400">{dataText.title}</p>
    
                        <div id="container" className="flex flex-col gap-2 max-lg:flex-row max-lg:gap-6 max-sm:flex-wrap max-sm:justify-center">
                            <a href="https://t.me/dumitru.rija" target="_blank" className="flex gap-2 hover:scale-105 transition w-fit">
                                <FontAwesomeIcon icon={faTelegram} className="w-5 h-5 text-2xl"/>
                                Telegram
                            </a>
                            <a href="mailto:websitesbydima@gmail.com" target="_blank" className="flex gap-2 hover:scale-105 transition w-fit">
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-2xl"/>
                                Gmail
                            </a>
                            <a href="https://instagram.com/websitesbydima" target="_blank" className="flex gap-2 hover:scale-105 transition w-fit">
                                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-2xl"/>
                                Instagram
                            </a>
                        </div>
    
                        <img src={logoShapeImg} className="w-1/5 absolute bottom-5 right-40 max-lg:hidden" alt="1st decor image of logo" />
                        <img src={dotsShapeImg} className="w-fit absolute top-22 right-16 max-lg:hidden" alt="2nd decor image of dots" />
                    </div>
                    <div className="w-1/2 max-lg:w-full">
                        <form action="" className="flex flex-col gap-3">
                            <div className="flex justify-between gap-2">
                                <input type="text" className="border border-white p-2 w-1/2 outline-none" placeholder={placeholdersData.nameInput} />
    
                                <input type="email" className="border border-white p-2 w-1/2 outline-none" placeholder={placeholdersData.emailInput} name="" id="" />
                            </div>
    
                            <input type="text" className="border border-white p-2 outline-none" placeholder={placeholdersData.titleInput} />
    
                            <textarea name="" className="border border-white p-2 outline-none" id="" placeholder={placeholdersData.messageInput}></textarea>
    
                            <input type="submit" value={placeholdersData.submitButton} className="text-white border border-purple-400 px-3 py-2 hover:bg-purple-900 transition max-lg:m-auto"/>
                        </form>
                    </div>
                </section>
}

export default ContactContact