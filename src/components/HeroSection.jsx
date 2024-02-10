'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';


function HeroSection() {
    return (
        <div className='w-full'>
            <img className='w-[100%]' src="assets/bannerBg.jpg" alt="banner" />
            <div className="centered md:text-7xl sm:text-6xl text-4xl md:py-6">
                <p>Welcome to</p>
                <div className='text-yellow-500' >
                    <Typewriter options={{
                        strings: "Career School",
                        autoStart: true,
                        loop: true,
                    }} ></Typewriter>
                </div>
                <p className='font-normal md:text-5xl sm:text-3xl text-2xl md:py-3' >HR SOLUTIONS</p>
            </div>
        </div>
    )
}

export default HeroSection