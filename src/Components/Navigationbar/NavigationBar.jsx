import React from 'react'
import { navbarItem } from '../../Utilities/NavigationLink'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav className='relative w-full bg-white h-[3em] flex justify-center'>
            <div className='flex justify-center w-full items-center h-[3em] fixed z-10 bg-white'>
                <div className='flex justify-center sm:justify-center w-full'>
                    {navbarItem.map((item, index) => {
                        return (
                            <NavLink variant="outlined" to={item.link} key={index}
                                className={({ isActive }) =>
                                    isActive ? "group active" : "group/notactive group notactive"
                                }
                            >
                                <div className='flex m-1 items-center'>
                                    <img src={item.image} className='w-[2em] h-auto m-2 group ' />
                                    <h2 className=' hidden group-[.active]:flex group-hover/notactive:flex '>{item.name}</h2>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar