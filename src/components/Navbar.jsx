'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetSection = document.getElementById(sectionId);
        const offset = targetSection.offsetTop - headerHeight + 80;

        window.scroll({ top: offset, behavior: "smooth" });
    }

    return (
        <div className="bg-white text-blue-950 body-font stickOntop">
            <header className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <Link href="#" className="flex title-font font-medium items-center text-blue-950 mb-4 md:mb-0">
                    <img className='h-20 w-auto' src='assets/logo.png' alt="logo" />
                </Link>
                <div className="md:ml-auto text-base flex flex-wrap items-center justify-center md:flex">
                    <Link href="/" className="mr-8 hover:text-yellow-500">Home</Link>
                    <Link href="#about" onClick={(event) => scrollToSection(event, 'about')} className="mr-8 hover:text-yellow-500">About Us</Link>
                    <Link href="#" className="mr-8 hover:text-yellow-500">Services</Link>
                    <Link href="#" className="mr-8 hover:text-yellow-500">Achivements</Link>
                </div>
                <button className="inline-flex items-center bg-yellow-500 text-blue-950 border-0 py-2 px-6 focus:outline-none hover:text-black rounded text-base mt-4 md:mt-0">
                    Contact us
                </button>
            </header>

        </div>

    )
}

export default Navbar