import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Header from "./partials/Header.jsx"
import Footer from "./partials/Footer.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from "./pages/NotFound.jsx"

function App() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Mobile Menu appears if clicked on hamburger
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const toggleMobileMenu = (bool) => {
    setIsMobileMenu(bool)
  }
  useEffect(() => {
    if (isMobileMenu) {
        document.body.classList.add("overflow-hidden")
    } else {
        document.body.classList.remove("overflow-hidden")
    }
  }, [isMobileMenu])

  return (
    <>
      <Header language={language} setLanguage={setLanguage} isMobileMenu={isMobileMenu} toggleMobileMenu={toggleMobileMenu} 
              className={isMobileMenu && 'hidden'} />

      <main className={`flex flex-col gap-14 pt-6 pb-12 text-white ${isMobileMenu && 'hidden'}`}>
        <Routes>
          <Route path="/" element={<Home language={language} />}/>
          <Route path="/projects" element={<Projects language={language} />}/>
          <Route path="/about-me" element={<About language={language} />}/>
          <Route path="/contact" element={<Contact language={language} />}/>
          <Route path="*" element={<NotFound language={language} />} />
        </Routes>
      </main>

      <Footer language={language} className={isMobileMenu && 'hidden'} />
    </>
  )
}

export default App