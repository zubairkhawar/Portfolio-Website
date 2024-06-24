"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-4'>
                <Link href="/" className='text-2xl text-white font-semibold'>LOGO</Link>
                
                {/* Mobile menu button */}
                <div className='block md:hidden'>
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                    >
                        {navbarOpen ? <XMarkIcon className='h-5 w-5' /> : <Bars3Icon className='h-5 w-5' />}
                    </button>
                </div>

                {/* Desktop menu */}
                <div className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        <li>
                            <Link href="#about" className='text-[#ADB7BE] sm:text-xl hover:text-white'>About</Link>
                        </li>
                        <li>
                            <Link href="#projects" className='text-[#ADB7BE] sm:text-xl hover:text-white'>Projects</Link>
                        </li>
                        <li>
                            <Link href="#services" className='text-[#ADB7BE] sm:text-xl hover:text-white'>Services</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {navbarOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col items-center py-4 space-y-4'>
                        <li>
                            <Link href="#about" className='text-[#ADB7BE] sm:text-xl hover:text-white'>About</Link>
                        </li>
                        <li>
                            <Link href="#projects" className='text-[#ADB7BE] sm:text-xl hover:text-white'>Projects</Link>
                        </li>
                        <li>
                            <Link href="#services" className='text-[#ADB7BE] sm:text-xl hover:text-white'>Services</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
