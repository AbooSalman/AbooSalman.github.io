import { Wrapper } from 'components/general'
import { Hero, Projects, Contribution } from 'components/home'
import { Footer, TopNav } from 'components/navigation'
import { motion } from 'framer-motion'
import React from 'react'
import { contributions } from 'utils/constants'

const Home = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <TopNav />
        <Wrapper>
            <Hero />
            <Projects />
            <div className="mt-10 max-w-xt mx-auto">
                <h4 className='text-darkGrey lg:ml-[50px] ml-5 xt:ml-[150px] font-freight-regular text-xl leading-[24px] md:text-[30px] md:leading-[42px]
                '>CONTRIBUTIONS</h4>
                <div className='mt-5 md:mt-[30px] lg:mt-[60px] flex pb-[50px] lg:pb-[100px] overflow-x-scroll scrollbar-hide'>
                    <div className='w-5 lg:w-[50px] xt:w-[150px] flex-shrink-0 opacity-0 pointer-events-none' />
                    <div className='flex space-x-5'>
                        {contributions.map((contribution, index) => (
                            <Contribution
                                key={index}
                                name={contribution.name}
                                description={contribution.description}
                                figma_link={contribution.figma_link}
                            />
                        ))}
                    </div>
                    <div className='w-[150px] flex-shrink-0 opacity-0 pointer-events-none' />
                </div>
            </div>
            <Footer />
        </Wrapper>
    </motion.div>
)

export default Home