import React from 'react'
import { Link } from 'react-router-dom'
import mask from 'assets/images/mask.png'

const Hero = () => (
    <div className='pt-[70px] max-w-xt mx-auto'>
        <div className='max-w-[1087px] relative mx-auto'>
            <h1 className='relative text-center mx-auto font-freight-regular text-[100px] leading-[95px] text-darkGrey'>
                Building <span className='text-white'>“Experiences”</span><br />for <span className='text-white'>Users</span> through <span className='text-white'>Design.</span>
            </h1>
            <p className='text-[72px] leading-[44px] absolute font-handwriting text-darkGrey/[.5] top-[-68px] left-[-27px] w-[141px]'>
                Shaping ideas into Products.
            </p>
            <p className='text-[72px] leading-[44px] absolute font-handwriting text-darkGrey/[.5] bottom-[-90px] right-[-89px] w-[184px]'>
                Building products for Business Success.
            </p>
        </div>
        <p className='mt-5 mx-auto text-center max-w-[846px] font-axiforma-light text-[18px] text-white/[.8] font-[250]'>
            I&apos;m a product designer and design enthusiast. I love creating seamless and usable experiences for
            the web and beyond. Please feel free to check out some projects
            I&apos;ve been working on.<br />
            <Link to="/about" className='text-white underline font-axiforma-regular'>Learn more about me.</Link>
        </p>
        <div className='mt-[94px] mx-auto max-w-xt px-[150px]'>
            <img src={mask} alt="mask" className='select-none pointer-events-none' />
        </div>
    </div>
)

export default Hero