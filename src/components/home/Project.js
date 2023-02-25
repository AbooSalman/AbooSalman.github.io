import React from 'react'

const Project = ({ image, name, description, index }) => (
    <div className={`flex flex-col self-start space-y-[30px] ${(index > 0 && (index + 1) % 2 === 0 ? 'pt-[60px]' : '')}`}>
        <div className='h-[500px] relative'>
            <img className='absolute top-0 left-0 h-full w-full object-cover' src={image} alt={name} />
        </div>
        <p className='mx-auto text-white/[.6] text-center max-w-[420px] font-axiforma-regular text-[22px] leading-9'>
            <span className='font-axiforma-bold text-white'>{name} - </span>
            {description}
        </p>
    </div>
)

export default Project