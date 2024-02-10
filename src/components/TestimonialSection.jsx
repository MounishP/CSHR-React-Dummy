import React from 'react'
import Testmonial from './testmonial'

async function getTestmonial() {
    const res = await fetch('http://localhost:8080/api/users/', {
        cache: 'no-cache',
        method: 'get'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return data
}

export default async function TestimonialSection() {

    const testimonials = await getTestmonial()

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center text-yellow-500 mb-4'>Hear us from our clients</h1>
            <div className='flex flex-wrap justify-around items-center gap-10'>

                {
                    testimonials.map((t) => (
                        <Testmonial key={t.id} data={t} />
                    ))
                }

            </div>
        </div>
    )
}
