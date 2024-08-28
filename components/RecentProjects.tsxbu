import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { cover } from 'three/src/extras/TextureUtils.js'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {''}
            <span className='blue-100'>recent projects</span>
        </h1>

           {/* {projects.map(({id, title, des, img, iconLists, link}) => (
    <div key={id} className='border border-white-100 rounded-lg p-4 h-[30rem] w-[30rem] '>
      <div className='relative rounded-lg'>
        <div className='relative sm:w-[540px] w-[80vw] overflow-hidden sm:-[40vh] h-[30vh] mb-10'>
          <div className='absolute w-full h-full overflow-hidden lg:rounded-lg bg-[#13162D] border border-white-100'>
              <img src='/bg.png' alt='bg-img'/>
          </div>
          <img
              src={img}
              alt={title}
              className='bottom-0 z-20'
          />
        </div>
        <h1 className='font-bold lg:text2xl md:text-xl text-base line-clamp-1'>
          {title}
        </h1>
        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
          {des}
        </p>

      </div>
      
    </div>
    ))} */}
    {/* {projects.map(({id, title, des, img, iconLists, link}) => (
    <div key={id} className="h-[20rem] w-full flex items-center justify-center border border-white-100">
      
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] border border-white-100 rounded-lg">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">
            {des}.
          </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
      </div>
      
    </div>
    ))} */}


        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
            <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                <PinContainer title={link} href={link}>
                    <div className='relative flex items-center justify-center sm:w-[540px] w-[80vw] overflow-hidden sm:-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img
                                src={img}
                                alt={title}
                                className='z-10 absolute bottom-0'
                            />
                    </div>
                    <h1 className='font-bold lg:text2xl md:text-xl text-base line-clamp-1'>
                        {title}
                    </h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                        {des}
                    </p>

                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon, index)=>(
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{
                                    transform: `translateX(-${5 * index * 2}px)`
                                    }}>
                                    <img src={icon} alt={icon} className='p-2 ' />
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='flex lg:text-xl sm:text-xs text-sm blue-100'> Check Live Site</p>
                            <FaLocationArrow className='ms-3' color='#CBACF9'/>
                        </div>
                    </div>

                </PinContainer>
            </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProjects