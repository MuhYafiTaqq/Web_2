import React from 'react'

import { FaCode } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";


import Foto from '../assets/Foto.svg'

const About = () => {
  return (
    <div className='container mx-auto'>
        <section className='grid grid-cols-2 gap-10'>
            <div className='col-span-2 lg:col-span-1 flex relative justify-center mx-2 lg:mx-0 h-100'>
                <img src={Foto} alt="" className='h-100 lg:h-150 -translate-x-19 lg:-translate-x-45' />

                <div className='absolute flex items-center gap-2 bg-white px-2 py-2 lg:px-4 rounded-full translate-x-23 translate-y-27 lg:translate-x-30 lg:translate-y-30 -rotate-15'>
                    <FaCode className='text-black text-lg lg:text-3xl' />
                    <p className='text-black text-sm lg:text-2xl'>Frontend Engineer</p>
                </div>
                <div className='absolute flex items-center gap-2 bg-fuchsia-500 px-2 py-2 lg:px-4 rounded-full translate-x-25 translate-y-50 lg:translate-x-35 lg:translate-y-70 rotate-5'>
                    <LuPenTool className='text-white text-lg lg:text-3xl rotate-270' />
                    <p className='text-white text-sm lg:text-2xl'>UI/UX Designer</p>
                </div>
                <div className='absolute flex items-center gap-2 bg-green-600 px-2 py-2 lg:px-4 rounded-full translate-x-25 translate-y-70 lg:translate-x-35 lg:translate-y-110 rotate-15'>
                    <AiOutlineVideoCameraAdd className='text-white text-lg lg:text-3xl' />
                    <p className='text-white text-sm lg:text-2xl'>Content Creator</p>
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1 flex flex-col justify-center mx-2 lg:mx-0 gap-2 h-100 lg:h-150'>
                <h1 className='text-white text-2xl lg:text-5xl font-bold'>About Me 😎</h1>
                <hr className='text-white lg:mt-2' />
                <p className='text-white/70 text-[11px] lg:text-lg mt-2 lg:mt-7'>
                    Hi! I’m Muhammad Yafi Taqiyuddin—a passionate learner in Informatics Engineering at Universitas Negeri Semarang, with a growing interest in UI/UX Design and Frontend Engineer. <br /><br />

                    My journey began with a curiosity for technology and creativity. I found purpose in combining design and code to solve real problems and craft meaningful digital experiences. I love turning ideas into clean, intuitive interfaces using HTML, CSS, JavaScript, and frameworks like React and Next.js. <br /><br />

                    More than just learning how things work, I’m driven to grow, contribute, and make an impact through what I build and share. <br /><br />

                    Designing with Purpose, Developing with Impact.
                    </p>
            </div>
        </section>
    </div>
  )
}

export default About