import React from 'react'
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg"

const Contribution = ({ name, description, figma_link, project_link }) => (
    <div className='flex-shrink-0 border-darkGrey border rounded-[5px] h-[464px] w-[463px] py-[60px] px-10 flex flex-col space-y-10'>
        <h2 className='text-[60px] leading-[70px] font-freight-regular text-white'>{name}</h2>
        <p className='font-axiforma-regular leading-[30px] text-white/[.5]'>{description}</p>
        <button type="button" className='flex items-center space-x-[9px]'>
            <span className='text-darkGrey text-base leading-6 underline font-freight-regular'>{figma_link ? "Open in Figma" : "View Live Project"}</span>
            <ArrowRight />
        </button>
    </div>
)

export default Contribution