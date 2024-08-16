import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <div id='works'>
        <h1 className='heading mb-10    '>
            My Work {''}
            <span className='text-pelorous-400'>Experience</span>
        </h1>
        <div className='flex lg:flex-row flex-col gap-10'>
            {workExperience.map((experience) => (
                <div key={experience.id} className='dark:bg-neutral-900 bg-neutral-200 rounded-lg lg:py-12 py-10 lg:px-10 px-8 flex flex-col gap-3'>
                    <p className=''>{experience.period}</p>
                    <h1 className='text-lg font-bold'>{experience.title}</h1>
                    <div className='flex lg:flex-none flex-wrap lg:gap-3 gap-2 mb-4 lg:mb-2'>
                        {experience.tags.map((tag, index) => (
                            <div key={index} className='border border-neutral-400 rounded-full w-auto lg:h-8 h-8 md:mb-2 flex justify-center items-center'>
                                <p className='px-3 text-xs lg:font-normal'>
                                {tag}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p>{experience.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience