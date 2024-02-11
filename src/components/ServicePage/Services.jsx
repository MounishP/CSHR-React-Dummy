'use client'
import React, { useState } from 'react'

function Services() {

    const technical = ["Python",
        "JAVA",
        "Dot Net",
        "Fullstack",
        "Data Science",
        "HTML",
        "CSS",
        "Android App Development",
        "Machine Learning",
        "IOS App Development",
        "AWS",
        "Azure",
        "Cybersecurity",
        "AI",
        "Internet of Things(IoT)",
        "React", "Angular",
        "Vue.Js",
        "Node.Js",
        "PHP",
        "Python-Django",
        "Blockchain Technology",
        "Big Data and Hadoop",
        "Digital Marketing",
        " UI / UX",
        "Networking",
        "CISA", "Embedded Systems",
        "Software Testing",
        "Quality Assurance(QA)"
    ]
    const nonTechnical = [
        "Digital Marketing",
        "HR",
        "Management Skill Training",
        "Soft Skill Training",
        "Business Communication Training",
        "Placement Trainings",
        "Interview Skill Training"
    ]



    const [content, setContent] = useState('');
    const [selectedButton, setSelectedButton] = useState('Technical');
    const handleButton1 = () => {
        setSelectedButton('Technical');
        setContent('Default content for Button 1');
    }

    const handleButton2 = () => {
        setSelectedButton('Non-Technical');
        setContent('Default content for Button 2');
    }

    return (
        <section className='lg:py-10 lg:px-20 py-2 px-4 bg-blue-950'>
            <div className="m-10 text-center">
                <h1 className='text-2xl sm:text-4xl font-bold text-yellow-500 text-center'>Our Services</h1>
            </div>
            <div className=' flex flex-col flex-wrap m-2 lg:m-5'>
                <div className='w-full flex px-5'>
                    <div onClick={handleButton1} className={`w-[50%] py-5 mx-2 ${selectedButton === 'Technical' ? 'bg-white/80 text-blue-950' : 'text-white'} text-2xl font-bold text-center cursor-pointer`}>
                        Technical
                    </div>
                    <div onClick={handleButton2} className={`w-[50%] py-5 mx-2 ${selectedButton === 'Non-Technical' ? 'bg-white/80 text-blue-950' : 'text-white'} text-2xl font-bold text-center cursor-pointer`}>
                        Non-Technical
                    </div>
                </div>
                <hr></hr>
                <div className='w-full py-4 px-7'>
                    <div className='text-blue-950 flex flex-wrap text-center items-center content-center justify-center text-base'>
                        {selectedButton === 'Technical' ?
                            technical.map((t, index) => (
                                <div id='service-card' className='w-40 h-16 m-2 lg:m-5 bg-slate-50 flex flex-wrap text-center items-center content-center justify-center' key={index}>
                                    <span>{t}</span>
                                </div>
                            )) :
                            nonTechnical.map((t, index) => (
                                <div id='service-card' className='w-44 h-20 m-2 lg:m-5 bg-slate-50 flex flex-wrap text-center items-center content-center justify-center' key={index}>
                                    <span className='p-8'>{t}</span>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section >
    );
}

export default Services