import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import mask from 'assets/images/mask.png'

const Hero = () => (
    <div>
        <div className='pt-[25px] xt:pt-[70px] max-w-xt mx-auto px-5 lg:px-[50px] xt:px-[150px]'>
            <div className='max-w-[1087px] relative mx-auto'>
                <motion.h1
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative text-center mx-auto font-freight-regular text-[50px] leading-[55px] md:text-[60px] md:leading-[65px] lg:text-[70px] lg:leading-[75px] xt:text-[100px] xt:leading-[95px] text-darkGrey'>
                    Building <span className='text-white'>“Experiences”</span><br />for <span className='text-white'>Users</span> through <span className='text-white'>Design.</span>
                </motion.h1>
                <p
                    className='hidden md:block text-[72px] leading-[44px] absolute font-handwriting text-darkGrey/[.5] top-[-68px] left-[-27px] w-[141px]'>
                    Shaping ideas into Products.
                </p>
                <p className='hidden md:block text-[72px] leading-[44px] absolute font-handwriting text-darkGrey/[.5] bottom-[-90px] right-[-89px] w-[184px]'>
                    Building products for Business Success.
                </p>
            </div>
            <motion.p
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.5 }}

                className='mt-5 mx-auto text-center max-w-[846px]leading-[18px] md:leading-normal font-axiforma-light text-sm md:text-[18px] text-white/[.8] font-[250]'>
                I&apos;m a product designer and design enthusiast. I love creating seamless and usable experiences for
                the web and beyond. Please feel free to check out some projects
                I&apos;ve been working on.{" "}
                <Link to="/about" className='text-white underline font-axiforma-regular'>Learn more about me.</Link>
            </motion.p>
        </div>
        {/* <div className='mt-[94px]'>
            <img src={mask} alt="mask" className='select-none pointer-events-none' />
        </div> */}
    </div>
)

export default Hero