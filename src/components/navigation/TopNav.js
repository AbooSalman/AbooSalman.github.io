import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Message } from "assets/icons/message.svg"

const TopNav = () => (
    <nav className='fixed top-0 left-0 w-full bg-dark h-[120px] z-[2]'>
        <div className='max-w-xt mx-auto flex justify-between items-center h-[120px] px-[150px]'>
            <Link to="/">
                <h3 className='font-freight-regular text-white text-base leading-[36.8px]'>GANIU ODEYINKA</h3>
            </Link>
            <ul className="flex items-center space-x-[50px]">
                <li><span className='text-white/[.4] font-gilroy-medium'>Works</span></li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `text-white/[.4] transition-all duration-150 hover:text-white font-gilroy-medium ${isActive ? '!text-white active-navlink' : ''}`}
                    >
                        About
                    </NavLink>
                </li>
                <li><span className='text-white/[.4] font-gilroy-medium'>Articles</span></li>
                <li className='flex items-center space-x-[11.5px]'>
                    <span className='text-white font-gilroy-medium'>Say Hello!</span>
                    <Message />
                </li>
            </ul>
        </div>
    </nav>
)

export default TopNav