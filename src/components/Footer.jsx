'use client'
import React from 'react'
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useRouter } from 'next/navigation';

export default function Footer() {
    const router = useRouter();

    const handleRedirectToFacebook = () => {
        router.push('https://www.facebook.com');
    };

    return (
        <footer className="text-yellow-600 body-font bg-blue-950">
            <div className="px-10 border-3 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
                <div>
                    <img className='h-24 w-auto' src='assets/logo.png' alt="logo" />
                </div>
                <div className='flex flex-col flex-wrap content-center items-center gap-5'>
                    <h1 className='text-2xl font-bold'>Follow us</h1>
                    <div className='flex gap-10 text-lg'>
                        <BsFacebook className='' size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToFacebook} />
                        <BsTwitterX size={30} style={{ cursor: 'pointer' }} />
                        <BsInstagram size={30} style={{ cursor: 'pointer' }} />
                        <BsLinkedin size={30} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
            <div className=" p-3 bg-yellow-500 mx-auto">
                <p className="text-center text-blue-950 text-sm md:text-xs sm:text-xs">
                    © 2024 Carrers School. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
