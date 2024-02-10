import React from 'react'

async function Testmonial({ data }) {
    console.log(data.name);
    return (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden " >
            <div className="p-4">
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4" src="./assets/logo.png" alt="Testimonial Avatar" />
                    <div>
                        <p className="text-gray-800 font-semibold">{data.name}</p>
                        <p className="text-gray-500 text-sm">{data.email}</p>
                    </div>
                </div>
                <p className="text-gray-700 text-base mt-4 italic">
                    "{data.about}"
                </p>
            </div>
        </div>
    );
}

export default Testmonial

{/* < div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg" >
                        <div className="p-4">
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src="testimonial-avatar.jpg" alt="Testimonial Avatar" />
                                <div>
                                    <p className="text-gray-800 font-semibold">John Doe</p>
                                    <p className="text-gray-500 text-sm">Web Developer</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-base mt-4 italic">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            </p>
                        </div> */}