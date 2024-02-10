import React from 'react'

const Achivements = () => {
    return (
        <div className="pr-14 bg-yellow-500 max-md:pr-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

                <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f390ebd86b18ed9a6795557d76018a058cb6e85a35955e24c6e92ef7559d5f4?"
                        className="maskedimage grow w-full fill-black max-md:max-w-full"
                    />
                </div>

                <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                        <div className="self-center text-3xl font-semibold text-center text-sky-900 whitespace-nowrap">
                            Our Achievements
                        </div>
                        <div className="mt-28 text-xl text-black max-md:mt-10 max-md:max-w-full">
                            We take great pride in our track record of success, including:
                            <br />
                            <br />
                            Over number successful placements
                            <br />
                            <br />
                            Recognized as Award Name in the field of HR Consulting
                            <br />
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