import BreadcrumbsContact from "../partials/contact-partials/BreadcrumbsContact.jsx"
import ContactContact from "../partials/contact-partials/ContactContact.jsx"

function Contact({ language }) {
    return (
        <>
            <BreadcrumbsContact language={language} />
            <ContactContact language={language} />
        </>
    )
}

export default Contact