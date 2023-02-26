import { motion } from 'framer-motion'
import React from 'react'

const Project = ({ image, name, description, index }) => {
    const isEven = index > 0 && (index + 1) % 2 === 0
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: isEven ? 0.1 : 0, damping: 14, type: "spring" }}
            viewport={{ once: true }}
            className={`flex flex-col self-start space-y-[30px] pt-[30px] ${(isEven ? 'lg:!pt-[60px]' : 'lg:!pt-0')}`}>
            <div className='h-[300px] lg:h-[500px] relative overflow-hidden'>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    className='absolute top-0 left-0 h-full w-full object-cover' src={image} alt={name} />
            </div>
            <p className='mx-auto text-white/[.6] text-center max-w-[420px] font-axiforma-regular text-base leading-[25px] lg:text-[22px] lg:leading-9'>
                <span className='font-axiforma-bold text-white'>{name} - </span>
                {description}
            </p>
        </motion.div>
    )
}

export default Project