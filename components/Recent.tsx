import { projects } from '@/data'
import React from 'react'

const Recent = () => {
  return (
  <div className='w-full relative my-6 grid lg:grid-flow-row lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-4 '>
    {projects.map((project)=>(
    <div key={project.id} className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      
  
      <div className='md:flex' >
        <div className='md:shrink-0'>
          <img className="h-20 w-full object-cover md:h-full md:w-48 overflow-hidden absolute" src={project.img} alt="Modern building architecture"/>

        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{project.title}</div>
          <a href='#' className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>Incredible accommodation for your team</a>
          <p className='mt-2 text-slate-500'>{project.des}</p>
        </div>
      </div>
      
    </div>
    ))}
  </div>  

    
  )
}

export default Recent