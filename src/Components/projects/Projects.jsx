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
                        <a href={item.link} key={index} className='hover:animate-flip flex flex-col justify-start relative items-center border border-solid border-black rounded-[1em] hover: gap-3 group'>
                            <div className=' flex flex-col justify-start items-center m-3  gap-3'>
                                <img src={item.image} />
                                <div className='flex flex-col justify-start items-center '>
                                    <div className='text-[1em] underline self-center font-semibold'>{item.name}</div>


                                </div>

                            </div>
                            <div className='hidden group-hover:animate-flip2 group-hover:absolute w-full h-full bg-black bg-opacity-50 group-hover:flex justify-center items-center rounded-[1em] '>
                                <div className='text-center text-white'>{item.detail}</div>
                            </div>
                        </a>
                    )
                })}
            </div>

        </ComponentHead>
    )
}

export default Projects

// hover:animate-flip