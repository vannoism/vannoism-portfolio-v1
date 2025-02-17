import React from 'react'
import facebook from '../assets/facebook1.png'
import instagram from '../assets/instagram1.png'
import linkedin from '../assets/linkedin1.png'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'

const Contact = () => {
  return (
    <section id='contact' className='z-50 bg-black relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
              <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex space-x-4'>
                {/* Facebook Link */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300'>
                  <img src={facebook} alt="Facebook" className='h-6 w-6 transition-all duration-300'/>
                </a>

                {/* Instagram Link */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300'>
                  <img src={instagram} alt="Instagram" className='h-6 w-6 transition-all duration-300'/>
                </a>

                {/* LinkedIn Link */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300'>
                  <img src={linkedin} alt="LinkedIn" className='h-6 w-6 transition-all duration-300'/>
                </a>
              </div>
              <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
            </div>
            <form className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'> 
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' placeholder='Full Name'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" id='email' placeholder='Email'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <button className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
