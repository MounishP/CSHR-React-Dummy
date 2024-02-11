import React from 'react'

function Card({ job }) {
    return (
        <div className="bg-white card rounded-md overflow-hidden w-[350px] lg:w-auto items-center text-center content-center justify-center">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{job.company.companyName}</div>
                <p className="text-gray-700 text-base">{job.formattedAddress}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full m-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2-4 years</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">chennai</span>
            </div>
        </div>
    )
}

export default Card