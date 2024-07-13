import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { AingMe, socialButton, socialMedia, workExperience } from '@/data';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

        <div className="h-screen w-full dark:bg-black-400 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-400 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> 
        </div>
        <div className='flex relative my-20 z-20'>         
          <div className='w-full grid lg:grid-flow-col lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 lg:grid-rows-3 '>
            
            
            <div className="lg:p-4 p-2 w-full   ">
              <div className='lg:my-4'>
                <p className='text-left text-xl lg:text-4xl leading-snug tracking-wide'>
                Hello there, I’m Iqbal Pratama Yuda,  
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-200'>
                  &nbsp; A Full-stack Developer
                  </span>
                </p>
              </div>
            </div>
            <div className="lg:p-4 p-2 w-full   ">
              <p className='text-left md:tracking-wider-mb4 text-md lg:text-2xl'>Wanna connect with me ?</p>
              <div className='flex items-center gap-3 lg:mt-5 mt-3'>
                {socialButton.map((social) =>(
                  <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <a href={social.link} target='_blank'>
                    <social.icon/>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className=" border border-white rounded-lg row-span-3 right-0">
              <div className="md:w-50% rounded-lg overflow-hidden">
                {AingMe.map((me) => (
                  <img key={me.id} src={me.img} alt='' className='object-cover object-center '/>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Hero