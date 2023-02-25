import React from 'react'
import { ReactComponent as DiagonalArrowRight } from "assets/icons/diagonal-arrow-right-up.svg"
import { projects } from 'utils/constants'
import Project from './Project'

const Projects = () => (
    <div className='max-w-xt mx-auto py-[100px] bg-dark px-[150px]'>
        <div className='flex justify-between items-center mb-[60px]'>
            <h3 className='font-freight-regular text-[30px] leading-[42px] text-darkGrey'>FEATURED PROJECTS</h3>
            <button className='border-none outline-none flex items-center space-x-[5px]' type="button">
                <span className='font-freight-regular text-base leading-[28px] text-right text-white underline'>View All Projects</span>
                <DiagonalArrowRight />
            </button>
        </div>
        <div className='grid-cols-2 grid gap-x-[60px]'>
            {projects.map((project, index) => (
                <Project key={index}
                    image={project.image}
                    index={index}
                    name={project.name}
                    description={project.description}
                />
            ))}
        </div>
    </div>
)

export default Projects