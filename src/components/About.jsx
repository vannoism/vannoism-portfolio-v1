import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'


const About = () => {
    return (
        <div className='relative' id='about'>
            {/* Background modified to dark */}
            <div className='bg-stone-950 text-orange-600 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-orange-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-600 sm:text-4xl'>Hi, I'm Dian Rivanno</p>
                        <p className='mt-4 max-w-2xl text-xl text-orange-400 lg:mx-auto'>
                            A Full-Stack Developer.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-orange-600'>My Journey</h3>
                                <p className="mt-4 text-lg text-orange-200 text-justify">
                                I am a dedicated student pursuing a degree in Information Systems, where I’ve discovered my passion for technology and software development. Over the past few years, I have been immersing myself in the world of coding and problem-solving, which led me to my current interest in the MERN stack.

                                The MERN stack, consisting of MongoDB, Express.js, React, and Node.js, has become a vital part of my learning journey. I am excited to explore its potential and build dynamic, full-stack applications. My ultimate goal is to become a maestro software engineer, mastering not only the technical aspects but also the creativity and innovation that go into crafting impactful software solutions.

                                I believe in the power of continuous learning, and I am always striving to improve my skills, tackle new challenges, and stay updated with the latest technologies. This journey is just the beginning, and I am committed to growing every day, one line of code at a time.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            {/* Border and Shadow set to orange */}
                            <div className='border border-orange-500 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-orange-300'>
                                <h3 className='text-2xl font-semibold text-orange-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Mongodb} alt="" className='w-10' />
                                        <span className='font-semibold'>Mongodb</span>
                                    </div>
                                    <div className='border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-300'>
                                        <img src={Express} alt="" className='w-10' />
                                        <span className='font-semibold'>Express Js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-orange-600'>More About Me</h3>
                        <p className='mt-4 text-lg text-orange-200 text-justify'>
                        Beyond my current focus on software development, I have a growing interest in Data Science and the vast possibilities it offers. The idea of extracting meaningful insights from raw data fascinates me, and I am eager to explore how data-driven decision-making can shape the future.

                        I am also deeply intrigued by Machine Learning and Artificial Intelligence. The ability to create intelligent systems that can learn and adapt is something I find both exciting and revolutionary. The thought of contributing to advancements in AI, whether in automation, predictive analytics, or innovative applications, fuels my curiosity even further.

                        At my core, I truly aspire to be a dedicated Information Systems professional. I want to master not only the technical aspects but also understand how technology can drive business solutions and innovation.

                        However, I know that all of these are still my ambitions—goals that I am working toward, step by step. I am embracing the learning journey, constantly seeking knowledge, and striving to turn my ambitions into reality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
