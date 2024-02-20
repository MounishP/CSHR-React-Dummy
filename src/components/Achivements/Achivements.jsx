import React from 'react'
import ImageSlider from '../notused/ImageSlider_notused'

const Achivements = () => {
    return (
        <div id='achivements' className="bg-yellow-500 py-6">
            <h1 className="px-10 py-5 w-full self-center text-2xl sm:text-4xl font-bold text-center text-sky-900 whitespace-nowrap">
                Our Achievements
            </h1>
            <div className="flex flex-col gap-5 lg:flex-row items-center justify-center content-center">
                <div className="flex flex-col lg:w-[50%] w-full max-md:ml-0 max-md:w-full">
                    <ImageSlider />
                </div>
                <div className="flex flex-col">
                    <div className="text-center text-xl text-sky-900">
                        <div className="mb-6 text-black max-md:mt-10 max-md:max-w-full">
                            We take great pride in our track record of success, including:
                            <br />

                            Over number successful placements
                            <br />

                            Recognized as Award Name in the field of HR Consulting

                            <br />A growing list of satisfied clients across various
                            industries
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivements