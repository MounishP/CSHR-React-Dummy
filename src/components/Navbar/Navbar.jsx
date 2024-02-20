'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const router = useRouter();

    const handleRedirectToWhatsapp = () => {
        router.push('https://wa.me/123456789?text="Hey there! Could you share more exciting details about CareerSchool?"');
    };

    const handleRedirectToLinkedin = () => {
        router.push('https://www.linkedin.com/');
    };

    const handleRedirectToInstagram = () => {
        router.push('https://www.instagram.com/');
    };

    const handleRedirectToFacebook = () => {
        router.push('https://www.facebook.com');
    };

    const handleRedirectToTwitterX = () => {
        router.push('https://twitter.com/home');
    };


    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const headerHeight = document.querySelector('header').offsetHeight;

        if (scrollY > headerHeight) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetSection = document.getElementById(sectionId);
        const offset = targetSection.offsetTop - headerHeight;

        window.scroll({ top: offset, behavior: "smooth" });
    }

    return (
        <nav className={`bg-white ${isScrolled ? 'show' : ''} text-yellow-500 shadow-lg body-font stickOntop`}>
            <header className="flex justify-between items-center h-full w-full px-4 2xl-px-16">
                <Image src={logo} alt="logo" height={75} className='cursor-pointer' />
                <div className='hidden md:flex'>
                    <ul className="hidden md:flex">
                        <Link href="/" className="ml-3 px-3 py-2 uppercase md:text-base text-base">Home</Link>
                        <Link href="#about" onClick={(event) => scrollToSection(event, 'about')} className="ml-3 px-3 py-2 uppercase md:text-base text-base">About Us</Link>

                        <Link href="#services" onClick={(event) => scrollToSection(event, 'services')} className="ml-3 px-3 py-2 uppercase md:text-base text-base">Services</Link>

                        <Link href="#training" onClick={(event) => scrollToSection(event, 'training')} className="ml-3 px-3 py-2 uppercase md:text-base text-base">Training</Link>
                        <Link href="#achivements" onClick={(event) => scrollToSection(event, 'achivements')} className="ml-3 px-3 py-2 uppercase md:text-base text-base">Achivements</Link>
                        <Link href="#jobs" onClick={(event) => scrollToSection(event, 'jobs')} className="ml-3 px-3 py-2 uppercase md:text-lg text-base">Jobs</Link>
                        <button className="ml-10 px-6 py-3 uppercase md:text-base md:px-4 md:py-2 text-base bg-yellow-500  text-blue-950 rounded-xl cursor-pointer">
                            Contact us
                        </button>
                    </ul>
                </div>

                <div onClick={handleNav} className='md:hidden cursor-pointer pl-24' >
                    <AiOutlineMenu size={25} />
                </div>

            </header>

            <div className={
                menuOpen ? 'fixed left-0 top-0 w-[75%] md:hidden p-10 ease-in duration-500 h-screen bg-black/90 z-10' : 'fixed left-[-100%] top-0 p-10 h-screen z-10 ease-in duration-500'
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={closeMenu} className='cursor-pointer text-white'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className='text-center py-2 text-white w-full my-4'>
                    <ul>
                        <Link href='/'>
                            <li onClick={(event) => { closeMenu(); }} className='py-3 cursor-pointer'>Home</li>
                        </Link>
                        <Link href=''>
                            <li onClick={(event) => { closeMenu(); scrollToSection(event, 'about'); }} className='py-3 cursor-pointer' >About</li>
                        </Link>
                        <Link href=''>
                            <li onClick={(event) => { closeMenu(); scrollToSection(event, 'services'); }} className='py-3 cursor-pointer'>Services</li>
                        </Link>
                        <Link href=''>
                            <li onClick={(event) => { closeMenu(); scrollToSection(event, 'jobs'); }} className='py-3 cursor-pointer'>Jobs</li>
                        </Link>
                        <Link href=''>
                            <li onClick={(event) => { closeMenu(); scrollToSection(event, 'training'); }} className='py-3 cursor-pointer'>Training</li>
                        </Link>
                        <button type="button" onClick={(event) => { closeMenu(); }} className='bg-white text-blue-950 px-6 py-3 rounded-xl  cursor-pointer hover:bg-white/75'>Contact Us</button>
                    </ul>
                </div>
                <div className='my-4 flex flex-col flex-wrap content-center items-center gap-2 text-white'>
                    <h1 className='text-2xl font-bold'>Follow us</h1>
                    <div className='flex gap-6 text-base'>
                        <BsWhatsapp size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToWhatsapp} />
                        <BsLinkedin size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToLinkedin} />
                        <BsInstagram size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToInstagram} />
                        <BsFacebook className='' size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToFacebook} />
                        <BsTwitterX size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToTwitterX} />
                    </div>
                </div>
                <div className='my-3 p-3 flex flex-col flex-wrap content-center items-center'>
                    <Image src={logo} alt="logo" height="100" className='cursor-pointer flex flex-wrap content-center items-center' />
                </div>
            </div>
        </nav>

    )
}

export default Navbar