import faqImg from "../../assets/faq-img.png";
import ExpandButton from "../../components/ExpandButton/ExpandButton";
import { useState } from "react";

const FAQ = () => {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    // const [five, setFive] = useState(false)
    // const [six, setSix] = useState(false)
    // const [seven, setSeven] = useState(false)
    
    const questionSvg = 
        <svg className="self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13.25 16.74C13.25 17.43 12.72 18 12 18C11.3 18 10.74 17.44 10.74 16.74C10.74 16.03 11.3 15.49 12 15.49C12.71 15.49 13.25 16.04 13.25 16.74ZM11.99 6C10.22 6 9.01 7.15 8.56 8.49L10.2 9.18C10.42 8.51 10.94 7.7 12 7.7C13.62 7.7 13.94 9.22 13.37 10.03C12.83 10.8 11.9 11.32 11.41 12.19C11.02 12.88 11.1 13.68 11.1 14.17H12.92C12.92 13.24 12.99 13.05 13.14 12.76C13.53 12.04 14.25 11.7 15.01 10.59C15.69 9.59 15.43 8.23 14.99 7.51C14.48 6.67 13.47 6 11.99 6ZM19 5H5V19H19V5ZM19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19Z" fill="black"/>
        </svg>

    const questionsArray = [
        {
            id: 1,
            question: "What is the purpose of SpoonFull?",
            answer: "SpoonFull is a platform designed to help prevent burnout by integrating a task planner inspired by the spoon theory. We aim to help our users avoid burnout by managing their tasks and prioritizing their mental health.",
            value: one,
            setValue: setOne,
        },
        {
            id: 2,
            question: "Can I exceed 12 spoons daily?",
            answer: "Certainly not, as each spoon represents a limited unit of energy. 12 spoons is currently the limit, but we are planning on implementing a feature for users to set their own daily limit in the future",
            value: two,
            setValue: setTwo,
        },
        {
            id: 3,
            question: "Can I save my tasks?",
            answer: "Your tasks are stored locally in your browser; you can even take screenshots to access your task list offline.",
            value: three,
            setValue: setThree,
        },
        {
            id: 4,
            question: "Can I share my tasks?",
            answer: "Certainly! You can share your task list by capturing screenshots and distributing them to anyone.",
            value: four,
            setValue: setFour,
        },
    ]


    return (
        <section className="center-column px-4">
            <div className="mt-4">
                <img src={faqImg} />
                <p className="text-subtitle pt-4">How can we help you?</p>
            </div>
            <div className="w-[100%] flex justify-between items-center border-b border-divider pb-2">
                <h4 className="text-header4 pt-4">FAQ</h4>
            </div>
            <div className="w-full">
                { questionsArray.map(question => {
                   return( <ExpandButton 
                        key={question.id}
                        question={question.question}
                        answer={question.answer}
                        value={question.value}
                        setValue={question.setValue}
                        svg={questionSvg}
                    />)}
                )}
                
            </div>
        </section>
    )
}

export default FAQ;