// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectItem from './ExperienceItem'
import hackerrankcertiImg from '../assets/HackerrankCertificate.png'
import livestreamImg from '../assets/OperatorLive.png'
import adobeImg from '../assets/AdobePremiere.png'
import unityImg from '../assets/Unity.png'

const Experience = () => {
  return (
    <div id='experience' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experience</h1>
        <p className='text-center py-8'>
        I am a person with a diverse set of experiences that showcase my skills. I have obtained a certificate in Basic JavaScript from HackerRank. Additionally, I have worked freelance as a camera operator for live streaming, reflecting my practical experience in managing live events and capturing quality footage. Furthermore, my expertise as a video editor, utilizing Adobe Premiere, underscores my ability to create and edit engaging visual content. Lastly, I have delved into game development, specifically creating a simple roll-a-ball game using Unity. These experiences collectively demonstrate my well-rounded skills in programming, live production, video editing, and simple game development.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={hackerrankcertiImg} title='JS Certificate' />
            <ProjectItem img={livestreamImg} title='Camera Operator' />
            <ProjectItem img={adobeImg} title='Video Editing' />
            <ProjectItem img={unityImg} title='Create Game' />
        </div>
    </div>
  );
};

export default Experience