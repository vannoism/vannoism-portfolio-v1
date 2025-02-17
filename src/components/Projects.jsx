import React from 'react'
import VanchatApp from '../assets/vanchatApp.png'
import DetectionApp from '../assets/detectionApp.png'
import Hydoc from "../assets/hydoc.png"
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Vanchat App',
          desc: 'A real-time messaging application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create accounts, send messages, and engage in real-time conversations.',
          image: VanchatApp,
          live: "https://vannchat-app.onrender.com/login",
          github: "https://github.com/vannoism/vannchat-app"
        },
        {
          title: ' Pneumonia Detection App',
          desc: 'The Pneumonia Detection App uses Python or Google Colab to detect pneumonia from radiological images, such as chest X-rays. It utilizes a deep learning model like Convolutional Neural Networks (CNN) to analyze X-ray images and classify whether they show signs of pneumonia.',
          image: DetectionApp,
          live: "https://colab.research.google.com/drive/1Ik9aH85Lr_OlG2X59nTAWQTI2c5U04xA#scrollTo=Llu8LEK6pmKT",
          github: "https://github.com/vannoism/"
        },
        {
          title: 'Hydoc',
          desc: 'Designing an online health consultation application system.',
          image: Hydoc,
          live: "https://drive.google.com/file/d/1C_1nEAr8zXjCcChLRoX4CuiSDdu0p_dS/view?usp=sharing",
          github: "https://github.com/vannoism/"
        },
      ];

  return (
    <section id='projects' className='relative bg-black py-10 px-4 text-justify'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-orange-600 border-b border-red-500 w-max pb-4'>My Latest Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
