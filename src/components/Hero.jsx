import React from 'react'
import hero from '../assets/hero2.png'
import facebook from '../assets/facebook1.png'
import twitter from '../assets/x.png'
import instagram from '../assets/instagram1.png'
import linkedin from '../assets/linkedin1.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug text-orange-300'>Hi There, <br />I'm Dian <span className='text-red-500'>Rivanno</span></h1>
               <p className='md:text-2xl text-xl mb-4 text-orange-300'>Striving to become a maestro software engineer.</p>
               <p className='mb-4 text-justify text-orange-300'>"I am currently learning the MERN stack, diving into MongoDB, Express.js, React, and Node.js to build dynamic and scalable web applications. Every day, I strive to improve my skills and deepen my understanding of full-stack development."</p>
               <button className='bg-orange-600 text-black px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing" download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className='lg:h-[110vh] h-90' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-auto p-4 md:flex flex-col gap-6 rounded-full'>
  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img 
      src={facebook} 
      alt="Facebook" 
      className='w-20 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
    />
  </a>

  {/* Instagram */}
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img 
      src={instagram} 
      alt="Instagram" 
      className='w-20 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
    />
  </a>

  {/* Twitter */}
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img 
      src={twitter} 
      alt="Twitter" 
      className='w-20 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
    />
  </a>

  {/* LinkedIn */}
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img 
      src={linkedin} 
      alt="LinkedIn" 
      className='w-20 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80'
    />
  </a>
</div>

    </section>
  )
}

export default Hero
