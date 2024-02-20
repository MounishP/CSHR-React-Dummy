import React from 'react'
import Flashcard from './Flashcard'


function Services() {

    const serviceNames = ["Talent Acquisition Solutions", "Corporate Training", "Campus Training", "Campus Recruitement", "Lateral Hiring", "US Recruitment"]

    return (
        <div>
            <section id='services' className="bg-blue-950 px-0 md:px-3 text-white lg:py-8 md:py-6 flex flex-col items-center lg:gap-6 md:gap-4 overflow-hidden">

                <div className="m-8 text-center">
                    <h1 className='text-2xl sm:text-4xl font-bold text-yellow-500 text-center'>Our Services</h1>
                </div>

                <div className="flex flex-wrap gap-3 lg:gap-10 md:gap-6 text-[16px] sm:text-[18px] text-center content-center justify-center">
                    {serviceNames.map((name, index) => (
                        <Flashcard key={index} name={name} />
                    ))}
                </div>

            </section>
        </div>
    )
}

export default Services