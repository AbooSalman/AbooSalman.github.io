import React from 'react'
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg"

const Contribution = ({ name, description, figma_link, project_link }) => {
    const link = (figma_link ?? project_link) ?? ""
    return (
        <div className='flex-shrink-0 border-darkGrey border rounded-[5px] w-[300px] lg:min-h-[464px] md:w-[463px] py-5 lg:py-[60px] px-5 lg:px-10 flex flex-col md:space-y-5 space-y-[15px] lg:space-y-10'>
            <h2 className='text-[30px] leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[60px] lg:leading-[70px] font-freight-regular text-white'>{name}</h2>
            <p className='font-axiforma-regular leading-[30px] text-white/[.5]'>{description}</p>
            <a href={link} target="_blank" rel="noreferrer" type="button" className='w-fit flex-shrink-0 pt-3 !mt-auto flex items-center text-darkGrey text-base leading-6 underline font-freight-regular hover:!text-white stroke-darkGrey duration-150 hover:stroke-white'>
                {link ? "Open in Figma" : "View Live Project"}
                <ArrowRight className="ml-[9px] stroke-current" />
            </a>
        </div>
    )
}

export default Contribution