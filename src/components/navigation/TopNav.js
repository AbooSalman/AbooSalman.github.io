import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Message } from "assets/icons/message.svg"
import { socialLinks } from "utils/constants"

const TopNav = () => {
    const [mobileNavVisible, setMobileNavVisible] = useState(false)
    return (
        <nav className='fixed top-0 left-0 w-full bg-dark h-[120px] z-[2]'>
            <div className='max-w-xt mx-auto flex justify-between items-center h-[120px] px-5 lg:px-[50px] xt:px-[150px]'>
                <NavLink to="/">
                    <h3 className='font-freight-regular text-white text-base leading-[36.8px]'>GANIU ODEYINKA</h3>
                </NavLink>
                <ul className="items-center space-x-[50px] hidden md:flex">
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
                    <li>
                        <a className='flex items-center space-x-[11.5px]' href={socialLinks.email} target="_blank"
                            rel="noreferrer"
                        >
                            <span className='text-white font-gilroy-medium'>Say Hello!</span>
                            <Message />
                        </a>
                    </li>
                </ul>
                <button
                    onClick={() => setMobileNavVisible(v => !v)}
                    className='flex md:hidden flex-col space-y-[5px] pl-3' type="button" title='mobile-navigation'>
                    <div className='h-[2px] w-[25px] bg-white' />
                    <div className='h-[2px] w-[25px] bg-white' />
                    <div className='h-[2px] w-[25px] bg-white' />
                </button>
            </div>
            <div className={`md:hidden fixed transition-all duration-150 top-0 bg-dark w-full h-screen ${mobileNavVisible ? 'left-0' : '-left-[100vw]'}`}>
                <ul className='flex flex-col space-y-6 overflow-y-auto h-screen p-5'>
                    <div className="flex items-center justify-between h-[100px]">
                        <NavLink to="/">
                            <h3 className='font-freight-regular text-white text-base leading-[36.8px]'>GANIU ODEYINKA</h3>
                        </NavLink>
                        <button type="button" title="exit mobile navigation" className='p-3'
                            onClick={() => setMobileNavVisible(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.71 5.23L10.46 8.98L8.98 10.46L5.23 6.71L1.48 10.46L0 8.98L3.75 5.23L0 1.48L1.48 0L5.23 3.75L8.98 0L10.46 1.48L6.71 5.23Z" fill="#fff" />
                            </svg>
                        </button>
                    </div>
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
                    <li>
                        <a className='flex items-center space-x-[11.5px]' href={socialLinks.email} target="_blank"
                            rel="noreferrer"
                        >
                            <span className='text-white font-gilroy-medium'>Say Hello!</span>
                            <Message />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopNav