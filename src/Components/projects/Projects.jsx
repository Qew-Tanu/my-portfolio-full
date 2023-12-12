import React from 'react'
import TextHeader from '../headlinecomponent/TextHeader'
import { projects } from '../../Utilities/projects'
import ComponentHead from '../headlinecomponent/ComponentHead'


const Projects = () => {
    return (
        <ComponentHead>
            <TextHeader>Pojects</TextHeader>
            <div className='grid grid-cols-1 landscape:grid-cols-3 gap-3 '>
                {projects.map((item, index) => {
                    return (
                        <div key={index} className=' flex flex-col justify-start relative items-center hover: gap-3 group'>
                            <div className=' flex flex-col justify-start items-center relative  gap-3  border border-solid border-black rounded-[1em] group-hover:animate-flip'>
                                <div className=' flex flex-col justify-start items-center m-3 gap-3'>
                                    <img src={item.image} />
                                    <div className='flex flex-col justify-start items-center '>
                                        <div className='text-[1em] underline self-center font-semibold'>{item.name}</div>


                                    </div>

                                </div>
                                <div className='hidden group-hover:animate-show group-hover:absolute w-full h-full bg-black bg-opacity-50 p-3 group-hover:flex flex-col justify-evenly items-center  rounded-[1em] '>
                                    <div className='text-center text-white'>{item.detail}</div>
                                    <a href={item.link} className='text-center text-white underline text-[1.2em]'>Go to Website!!!</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </ComponentHead>
    )
}

export default Projects

// hover:animate-flip