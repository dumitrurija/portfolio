
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from "../Title.jsx"

import languages from "../../data/translation.js";

function ContactsHome({ language }) {
    const dataText = languages[language].home.contactSection

    const contacts = [
        {
            id: 1,
            icon: faInstagram,
            name: "websitesbydima",
            url: "https://instagram.com/websitesbydima"
        },
        {
            id: 2,
            icon: faDiscord,
            name: "dymost",
            url: "https://discord.com/users/dymost"
        },
        {
            id: 3,
            icon: faTelegram,
            name: "dumitru.rija",
            url: "https://t.me/dumitru.rija"
        },
        {
            id: 4,
            icon: faEnvelope,
            name: "websitesbydima@gmail.com",
            url: "mailto:websitesbydima@gmail.com"
        }
    ]

    return <section id="contacts">
                <Title name={dataText.title} length={window.innerWidth < 640 ? "w-full" : "w-1/6"} />

                <div id="container" className="flex justify-between pt-6 max-sm:flex-col max-sm:items-center max-sm:gap-6">
                    <div id="contacts-left" className="w-1/2 max-sm:w-full">
                        <p className="text-gray-400">{dataText.contact}</p>
                    </div>
                    <div id="contacts-right" className="p-3 border border-gray-400 text-white flex flex-col gap-3 max-sm:w-full">
                        <h3>{dataText.heading}</h3>
                        <ul className="flex flex-col gap-2">
                            {contacts.map((contact, i) => <li key={contact.id} className="text-gray-400 flex gap-2 items-center hover:text-white">
                                <FontAwesomeIcon icon={contact.icon} className="text-xl w-[16px] h-[16px]" />
                                <a href={contact.url} target="_blank">{contact.name}</a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </section>
}

export default ContactsHome