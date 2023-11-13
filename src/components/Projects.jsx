// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectItem from './ProjectItem'
import tixmdcImg from '../assets/TixMdcWeb.png'
import formImg from '../assets/InputFormWeb.png'
import bioImg from '../assets/BioWeb.png'
import foodmenuImg from '../assets/FoodMenu.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
        In this project, i was responsible for designing and developing a website as part of a class project. The main focus of this project was to hone my web design skills while understanding fundamental concepts of site development.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={tixmdcImg} title='TixMdc Web' />
            <ProjectItem img={formImg} title='Form Web' />
            <ProjectItem img={bioImg} title='Bio Web' />
            <ProjectItem img={foodmenuImg} title='FoodMenu' />
        </div>
    </div>
  );
};

export default Projects