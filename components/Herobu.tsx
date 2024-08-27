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
          {/* <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Transforming Concepts into Seamless User Experiences'
            />
            <p className='text-center md:tracking-wider-mb4 text-sm md:text-lg lg:text-2xl'>
              Hallo bangsat, Hahahahah tolol.
            </p>
            <a href="#about">
              <MagicButton
                title="Show my hell"
                icon={<FaLocationArrow/>}
                position='right'
              />
            </a>
          </div> */}
          {/* <div className='flex justify-between relative grid grid-cols-2 gap-2 w-full '>
            <div className='left-0'>
                <TextGenerateEffect 
                  className='text-left text-[40px] md:text-5xl lg:text-6xl'
                  words='Hello there, I’m Iqbal Pratama Yuda, A Full-stack Developer'
                />
                <div>
                  <p className='absolute text-left md:tracking-wider-mb4 text-sm md:text-lg lg:text-2xl'>Wanna connect with me?
                  </p>
                  <div>
                    <a href="#about">
                      <MagicButton
                        title="Show my hell"
                        icon={<FaLocationArrow/>}
                        position='right'
                      />
                    </a>
                  </div>
                </div>
              </div>
            <div>
            <div className="h-[400px] w-[400px] bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed rounded-lg justify-end absolute right-0"></div>
            </div>
          </div> */}
          
            {/* <div className="justify-between relative grid grid-rows-3 lg:grid-cols-2 grid-flow-col  gap-6 leading-10 border border-white-100">
                <div className="p-4 w-full border border-white-100 ">
                    <div className='my-4'>
                      <p className='text-left md:text-3xl lg:text-4xl leading-snug tracking-wide'>
                      Hello there, I’m Iqbal Pratama Yuda,  
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-200'>
                        &nbsp; A Full-stack Developer
                        </span>
                      </p>
                    </div>
                </div>
                <div className="p-4 w-full flex justify-between items-center border border-white-100">
                  <div className=''>
                    <p className='text-left md:tracking-wider-mb4 text-sm md:text-lg lg:text-2xl'>Wanna connect with me ?</p>
                    <div className='flex items-center md:gap-3 gap-3 mt-5'>
                      {socialButton.map((social) =>(
                        <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                          <a href={social.link}>
                          <social.icon/>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-[500px] right-0 flex absolute border border-white rounded-lg row-span-3 my-auto overflow-hidden ">
                  <div className="rounded-lg ">
                    {AingMe.map((me) => (
                      <img src={me.img} alt='' className='w-full h-full'/>
                    ))}
                  </div>
                </div>
            </div> */}
          
          <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 grid-rows-3 gap-5 border border-white'>
            <div className='flex-1'>
              <div className='flex lg:flex-row flex-col lg:items-center  gap-2 border border-white'>
                <p className='text-left md:text-3xl lg:text-4xl leading-snug tracking-wide'> Hello there, I’m Iqbal Pratama Yuda,  
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-200'>
                    &nbsp; A Full-stack Developer
                    </span>
                </p>
              </div>
            </div>
            <div className='flex-1'>
              <div className='flex lg:flex-row flex-col lg:items-center  gap-2 border border-white'>            
                  <p className='text-left md:tracking-wider-mb4 text-sm md:text-lg lg:text-2xl'>
                    Wanna connect with me ?
                  </p>
                  {socialButton.map((social) =>(
                  <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <a href={social.link}>
                    <social.icon/>
                    </a>
                  </div>
                  ))}
              </div>
            </div>
              <div className='flex-1'>
                <div className='flex lg:flex-row flex-col lg:items-center gap-2 border border-white'>
                  <div className="lg:w-[500px] border border-white rounded-lg overflow-hidden ">
                    <div className="rounded-lg ">
                      {AingMe.map((me) => (
                        <img src={me.img} key={me.id} alt='' className='w-full h-full'/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
  );
}

export default Hero