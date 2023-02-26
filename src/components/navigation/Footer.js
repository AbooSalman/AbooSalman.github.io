import React from 'react'
import { socialLinks } from "utils/constants"
import { ReactComponent as Youtube } from 'assets/icons/social/youtube.svg'
import { ReactComponent as Twitter } from 'assets/icons/social/twitter.svg'
import { ReactComponent as Instagram } from 'assets/icons/social/instagram.svg'
import { ReactComponent as Facebook } from 'assets/icons/social/facebook.svg'
import { ReactComponent as Medium } from 'assets/icons/social/medium.svg'

const Footer = () => (
    <div className='bg-dark2'>
        <div className='mx-auto px-5 lg:px-[50px] xt:px-[150px] max-w-xt pt-[50px] pb-[50px] lg:pb-[105px] lg:pt-[120px] flex flex-col space-y-[30px] lg:space-y-[60px]'>
            <h2 className='text-center mx-auto max-w-[538px] text-[30px] leading-[42px] md:text-[50px] md:leading-[62px] font-freight-regular text-white'>
                Let&apos;s work together to
                build awesome products</h2>
            <div className='flex flex-col space-y-10 lg:flex-row justify-center items-center lg:space-y-0 lg:space-x-10'>
                <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className='border border-darkGrey rounded-2xl text-white h-[152px] text-center w-[200px] lg:w-[540px] font-freight-regular text-xl lg:text-[30px] flex items-center justify-center'>Send a Whatsapp Message</a>
                <a href={socialLinks.email} target="_blank" rel="noreferrer" className='border border-darkGrey rounded-2xl text-white h-[152px] text-center w-[200px] lg:w-[540px] font-freight-regular text-xl lg:text-[30px] flex items-center justify-center'>Send an Email</a>
            </div>
            <div className='flex justify-center items-center space-x-4'>
                <div className='h-8 w-8 rounded-full justify-center items-center flex bg-white'>
                    <Youtube />
                </div>
                <div className='h-8 w-8 rounded-full justify-center items-center flex bg-white'>
                    <Twitter />
                </div>
                <div className='h-8 w-8 rounded-full justify-center items-center flex bg-white'>
                    <Instagram />
                </div>
                <div className='h-8 w-8 rounded-full justify-center items-center flex bg-white'>
                    <Facebook />
                </div>
                <div className='h-8 w-8 rounded-full justify-center items-center flex bg-white'>
                    <Medium />
                </div>
            </div>
        </div>
        <div className='flex h-[15px]'>
            <div className='h-[15px] w-[25%] flex-shrink-0 bg-[#ED5B42]'></div>
            <div className='h-[15px] w-[25%] flex-shrink-0 bg-[#F4AA85]'></div>
            <div className='h-[15px] w-[25%] flex-shrink-0 bg-[#C3DAE0]'></div>
            <div className='h-[15px] w-[25%] flex-shrink-0 bg-[#414247]'></div>
        </div>
    </div>
)

export default Footer