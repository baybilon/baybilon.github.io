import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { AingMe, socialButton, socialMedia, workExperience } from '@/data';
import ThemeToggle from './ui/ThemeToggle';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="white"/>
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

        <div className="h-screen w-full dark:bg-neutral-950 bg-neutral-50 flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-nuetral-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> 
        </div>
        <div className='flex relative lg:my-20 z-20'>

          <div className='flex flex-col lg:flex-row lg:gap-20 gap-8 lg:mb-0 mb-8 w-auto'>
              <div className='lg:w-[55%]'>
                <div className=''>
                  <div className='lg:my-6 my-3'>
                    <div className='text-left text-2xl lg:text-5xl leading-snug tracking-wide   '>
                    Hello there, I’m Iqbal Pratama Yuda,  
                      <span className='text-pelorous-default dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-pelorous-300 dark:to-pelorous-500'>
                      &nbsp; A Full-stack Developer
                      </span>
                    </div> 
                  </div>
                  {AingMe.map((me) =>       
                  <p key={me.id} className='text-base lg:my-6 my-3'>
                    {me.intro}
                  </p>
                  )}
                </div>

                <div className='mt-12'>
                  <p className='text-left lg:text-lg text-base my-3'>Wanna connect with me ?</p>
                  <div className='flex flex-wrap lg:flex-row gap-3 my-3'> 
                    {socialButton.map((social) =>(
                      <div key={social.id} className=' h-auto cursor-pointer flex justify-center bg-pelorous-default dark:bg-neutral-900 rounded-full dark:border dark:border-neutral-800 '>
                        <a href={social.link} target='_blank' className='flex flex-row items-center py-2 px-4 gap-2 text-white text-xs lg:text-base'>
                        <social.icon size={22}/>
                        {social.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='w-fit '>
              {AingMe.map((me) => (
                  <img key={me.id} src={me.img} alt='' className='aspect-square right-0 lg:h-[500px] border dark:border-neutral-700 rounded-lg'/>
                ))}
              </div>
          </div>

          {/* <div className='grid grid-cols-2 grid-rows-2 grid-flow-col border border-white'>
            <div className='border row-span-1 col-span-1 col-start-1 col-end-2 w-[120%]'>
              <div className='lg:my-4'>
                  <div className='text-left text-xl lg:text-5xl leading-snug tracking-wide border'>
                  Hello there, I’m Iqbal Pratama Yuda,  
                    <span className='text-pelorous-default dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-pelorous-300 dark:to-pelorous-500'>
                    &nbsp; A Full-stack Developer
                    </span>
                  </div>

                </div>
            </div>
            <div className=' flex flex-row gap-4 border row-span-1 col-span-1 col-start-1 col-end-1 w-full'>
              <div className=''>
                <p className='text-left md:tracking-wider-mb4 text-md lg:text-2xl border'>Wanna connect with me ?</p>
                <div className='border flex items-center gap-3 lg:mt-5 mt-3'> 
                  {socialButton.map((social) =>(
                    <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center bg-pelorous-default dark:bg-neutral-900 backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-primary- rounded-lg border dark:border-neutral-800 hover:border-neutral-700 transition duration-200'>
                      <a href={social.link} target='_blank'>
                      <social.icon/>
                      </a>
                    </div>
                  ))}
                    <div  className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                      <button>
                        <ThemeToggle/>
                      </button>
                    </div>
                </div>
              </div>
            </div>
            <div className='col-span-1 row-span-2 col-start-2 col-end-3 flex border w-[80%]'>
                {AingMe.map((me) => (
                  <img key={me.id} src={me.img} alt='' className='flex items-center right-0 aspect-auto h-[500px] border border-neutral-400 dark:border-neutral-700 rounded-lg'/>
                ))}
                <p className='flex justify-between right-0'>knjt</p>
            </div>
          </div> */}
          
                   
          {/* <div className='w-full flex grid lg:grid-flow-col lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 lg:grid-rows-3 border'>
            <div className="lg:p-4 p-2 w-[80%]  ">
              <div className='lg:my-4'>
                <heading className='text-left text-xl lg:text-5xl leading-snug tracking-wide border'>
                Hello there, I’m Iqbal Pratama Yuda,  
                  <span className='text-pelorous-default dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-pelorous-300 dark:to-pelorous-500'>
                  &nbsp; A Full-stack Developer
                  </span>
                </heading>
              </div>
            </div>
            <div className="lg:p-4 p-2  border">
              <p className='text-left md:tracking-wider-mb4 text-md lg:text-2xl'>Wanna connect with me ?</p>
              <div className='flex items-center gap-3 lg:mt-5 mt-3'>
                {socialButton.map((social) =>(
                  <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center bg-pelorous-default dark:bg-neutral-900 backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-primary- rounded-lg border dark:border-neutral-800 hover:border-neutral-700 transition duration-200'>
                    <a href={social.link} target='_blank'>
                    <social.icon/>
                    </a>
                  </div>
                ))}

                  <div  className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <button>
                      <ThemeToggle/>
                    </button>
                  </div>
              </div>
            </div>
            <div className="  row-span-3 right-0 flex border">
              <div className="flex items-center md:w-50% rounded-lg overflow-hidden">
                {AingMe.map((me) => (
                  <img key={me.id} src={me.img} alt='' className='object-cover object-center h-[450px] border border-neutral-400 dark:border-neutral-700 rounded-lg'/>
                ))}
              </div>
            </div>
          </div> */}
        </div>
    </div>
  );
}

export default Hero