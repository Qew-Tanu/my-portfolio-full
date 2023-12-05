import React from 'react'

const ComponentHead = (props) => {
    return (
        <div className='text-black absolute top-0 w-full h-full flex items-center flex-row group/all p-3  '>
            <div className='flex flex-col w-full h-full items-center overflow-y-scroll justify-start border border-black border-solid bg-gray-300 bg-opacity-70 rounded-[3em] p-5 gap-10 z-10 '>
                {props.children}
            </div>
        </div>
    )
}

export default ComponentHead