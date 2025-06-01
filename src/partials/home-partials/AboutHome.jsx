import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Title from "../Title.jsx"
import LinkButton from '../LinkButton.jsx'

import dotsShapeImg from "../../imgs/shapes/dots.svg"
import aboutImg from "../../imgs/about.png"

import languages from '../../data/translation.js';

function AboutHome({ language }) {

    const dataText = languages[language].home.aboutSection

    const [answerViews, setAnswerViews] = useState([
        {
            id: 1,
            isToggled: true
        },
        {
            id: 2,
            isToggled: false
        },
        {
            id: 3,
            isToggled: false
        }
    ])

    const toggleAnswerView = (id) => {
        setAnswerViews(
            answerViews.map(answer => {
                if (answer.id === id && answer.isToggled) {
                    return {...answer, isToggled: false} 
                }
                else if(answer.id === id) { 
                    return {...answer, isToggled: true} 
                } else {
                    return {...answer, isToggled: false}
                }
            })
        )
    }

    const abouts = [
        {
            id: 1,
            question: dataText.question1.question,
            answer: dataText.question1.answer
        },
        {
            id: 2,
            question: dataText.question2.question,
            answer: dataText.question2.answer
        },
        {
            id: 3,
            question: dataText.question3.question,
            answer: dataText.question3.answer
        }
    ]

    return <section id="about-me" className="flex flex-col gap-6">
                <Title name={dataText.title} length={window.innerWidth < 640 ? "w-full" : "w-1/3"} />

                <div id="container" className="flex justify-between items-center max-sm:flex-col">
                    <div id="about-left" className="h-full w-1/2 flex flex-col gap-4 max-sm:w-full">

                        {abouts.map((about, i) => 
                        <div key={about.id} className="flex flex-col gap-6 border border-gray-400 p-2 cursor-pointer" onClick={() => toggleAnswerView(about.id)}>
                            <div id="question" className="flex justify-between items-center">
                                <p>{about.question}</p>  
                                <FontAwesomeIcon 
                                    icon={answerViews[i].isToggled ? faChevronUp : faChevronDown}
                                    className="hover:scale-125 transition" />
                            </div>

                            <div id="answer" className={`text-gray-400 ${!answerViews[i].isToggled && "hidden"}`}>
                                <p>{about.answer}</p>
                            </div>
                        </div>)}
                        
                        <LinkButton to="/about-me">{dataText.buttonText}</LinkButton>
                        
                    </div>

                    <div id="about-right" className="flex items-center justify-end relative max-sm:hidden">
                        <img className="border-b border-purple-400 max-lg:w-9/12" src={aboutImg} alt='"Photo" of Dima, situated in about section' />
                        <img src={dotsShapeImg} className="absolute top-12 left-0 w-22 max-lg:w-12 max-lg:left-16" alt="1st Decor image of dots, behind main photo" />
                        <img src={dotsShapeImg} className="absolute right-6 bottom-32" alt="2nd Decor image of dots, behind main photo" />
                    </div>
                </div>
            </section>
}

export default AboutHome