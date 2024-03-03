'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Slider from './Slider'

const Achivements = () => {
    return (
        <div id='achivements' className="bg-yellow-500 py-6">
            <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="px-10 py-5 w-full self-center text-2xl sm:text-4xl font-bold text-center text-sky-900 whitespace-nowrap">
                Our Achievements
            </motion.h1>
            <div className="flex flex-col gap-5 lg:flex-row items-center justify-center content-center">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .75, ease: 'easeInOut' }} className="flex flex-col lg:w-[50%] w-full max-md:ml-0 max-md:w-full">
                    <Slider />
                </motion.div>
                <div className="flex flex-col">
                    <div className="text-center text-xl text-red-500">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 1, ease: 'easeInOut' }} className="mb-6 max-md:mt-10 max-md:max-w-full">
                            We take great pride in our track record of success, including:
                            <br />

                            Over number successful placements
                            <br />

                            Recognized as Award Name in the field of HR Consulting

                            <br />A growing list of satisfied clients across various
                            industries
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivements