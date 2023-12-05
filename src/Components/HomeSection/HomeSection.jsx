import React from 'react'
import { contactItems } from '../../Utilities/contact'

const HomeSection = () => {

    return (
        <div className='text-black absolute top-0 w-[100%] sm:w-fit sm:h-full flex items-center flex-row group/all'>
            <div className='flex flex-col sm:flex-row h-full bg-gray-300 bg-opacity-70 w-full px-3 sm:w-fit items-center'>
                <div className='h-full flex flex-col p-5 text-[1em] gap-4 w-[300px] lg:w-[350px] justify-center items-center'>
                    <p>HELLO EVERYBODY I'AM</p>
                    <h1 className='text-[1.2em] sm:text-[1.5em] font-bold'>TANU</h1>
                    <h1 className='text-[1.2em] sm:text-[1.5em] font-bold'>TARATHIKHAMPOR</h1>
                    <p className=''>YOU CAN CALL ME <span className='text-[1.2em] sm:text-[1.5em] font-bold relative group/name'>"Qew"
                        {/* <span className='absolute top-[50%] left-[50%] border w-full'>
                            qweqweqw
                        </span> */}
                    </span></p>
                    <p>JUNIOR FRONT-END DEVELOPER</p>
                    <p className='hidden lg:flex'>I was Project engineer, Mechanical field in SCG Company before. And I reskill about web developer with Westride and Coursera</p>
                </div>
                <div className='w-fit sm:h-full flex flex-col p-5 gap-4 justify-center'>
                    {contactItems.map((item, index) => {
                        return (
                            <div className='flex gap-2 hover:bg-blue-200 rounded-[2em] items-center group/contact' key={index}>
                                <img src={item.image} className='w-[2em] h-[2em] group-hover/contact:w-[3em] group-hover/contact:h-[3em]' />
                                <a href={item?.link} className='font-semibold flex sm:hidden sm:group-hover/all:flex'>{item.detail}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default HomeSection