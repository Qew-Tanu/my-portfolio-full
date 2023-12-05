import React from 'react'
import { contactItems } from '../../Utilities/contact'
import TextHeader from '../headlinecomponent/TextHeader'
import ComponentHead from '../headlinecomponent/ComponentHead'



const Contacts = () => {
    return (
        <ComponentHead>
            <TextHeader>Contact</TextHeader>
            <div className='flex w-full h-full justify-center'>
                <div className=' h-full flex flex-col p-5 gap-4 overflow-x-hidden  '>
                    {contactItems.map((item, index) => {
                        return (
                            <div>
                                <a href={item?.link} className=' flex gap-2 items-center w-fit justify-start rounded-[2em] hover:bg-blue-200 p-3 ' key={index}>
                                    <img src={item.image} className='w-[2em] h-[2em]' />
                                    <div className='font-semibold min-w-[55px] md:min-w-[85px]'>{item.name} : </div>
                                    <p className='font-semibold truncate overflow-x-hidden '>{(item.name === 'phone' || item.name === 'email') ? item.detail : item.link}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ComponentHead>

    )
}

export default Contacts