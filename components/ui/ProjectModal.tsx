"use client"
import React, { useEffect, useRef, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'


const ProjectModal = ({project, onClose}) => {

  if(!project) return null;

  return (
    <>
    <div className='fixed h-full w-full flex justify-center items-center bg-black-400 backdrop:bg-black/85 rounded-lg border border-white/[0.2] overflow-scroll transition ease-in-out duration-200'>
    <div className='top-0 right-16 absolute'>
      <button 
        className='fixed p-5'
        onClick={onClose}
      >
        <FaXmark className='h-8 w-8 '/>
      </button>
    </div>
    {project && (
    <div className='flex relative h-full lg:py-20 py-10'>
      <div className='grid grid-flow-row grid-cols-2 gap-8 lg:w-[60vw] w-[80vw] h-full pb-96'>
        <div className='col-span-2 '>
          <h1 className='font-bold lg:text2xl md:text-xl text-base'>
              {project.title}
          </h1>
        </div>
        <div className='col-span-2 '>
          <p className='lg:text-xl lg:font-normal font-light text-sm'>
              {project.des}
          </p>
        </div>
        <div className='col-span-2 lg:w-10/12 w-full'>
          <p className='lg:text-xl lg:font-normal font-light text-sm '>
              {project.desL}
          </p>
        </div>
        <div className='lg:col-span-1 col-span-2'>
          <div className='flex lg:flex-none flex-wrap lg:gap-3 gap-2'>
            {project.tag.map((tag, index) => ( 
              <div key={index} className='border border-white/[0.3] rounded-lg bg-black w-auto lg:h-10 h-8 md:mb-2 flex justify-center items-center'>
                <p className='px-3 text-xs lg:text-base lg:font-normal'>
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-2 pb-20'>
          <div className='items-center grid grid-cols-1 lg:gap-10 gap-6'>
            {project.img?.map((img, index) => (
              <div key={index} className='border border-white/[0.1] rounded-lg'>
                  <img src={img} alt='img' className='object-contain object-center w-full h-full p-5'></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )}
    
  </div>
  </>
  )
}

export default ProjectModal