import { Wrapper } from 'components/general'
import { Hero, Projects, Contribution } from 'components/home'
import { Footer, TopNav } from 'components/navigation'
import React from 'react'
import { contributions } from 'utils/constants'

const Home = () => (
    <div>
        <TopNav />
        <Wrapper>
            <Hero />
            <Projects />
            <div className="mt-10 max-w-xt mx-auto">
                <h4 className='text-darkGrey ml-[150px] text-[30px] font-freight-regular'>CONTRIBUTIONS</h4>
                <div className='mt-[60px] flex pb-[100px] overflow-x-scroll scrollbar-hide'>
                    <div className='w-[150px] flex-shrink-0 opacity-0 pointer-events-none' />
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
    </div>
)

export default Home