// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub,FaInstagram , FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='EzraPelealu.png' alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Ezra Pelealu</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I'm a
                    <TypeAnimation
                        sequence={[
                            'Web Developer',
                            2000,
                            'Video Editor',
                            2000,
                            'Musician',
                            2000,
                        ]}
                        wrapper='div'
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px'}}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href='https://www.instagram.com/epelealu_'>
                        <FaInstagram className='cursor-pointer' size={20}/>
                    </a>
                    <a href='https://github.com/EzraPelealu'>
                        <FaGithub className='cursor-pointer' size={20}/>
                    </a>
                    <a href='https://www.linkedin.com/in/ezra-pelealu/'>
                        <FaLinkedinIn className='cursor-pointer' size={20}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;