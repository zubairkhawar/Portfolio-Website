"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
                    <br></br>
                    <TypeAnimation
                         sequence={[
                           'Zubair',
                           1000,
                           'Full Stack Developer',
                           1000,
                           'Mobile App Developer',
                           1000,
                           'Shopify Expert',
                           1000
                         ]}
                         wrapper="span"
                         speed={50}
                         repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipising elit. 
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full w-[250px] h-[200px] lg:w-[400px] lg:h-[400px] relative'>
                    <img src="hero-img.png" alt='hero image' width={300} height={300} className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full' ></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
