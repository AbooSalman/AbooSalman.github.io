import ganiu from "assets/images/ganiu/image-1.png"
import { motion, AnimatePresence } from 'framer-motion'
import { Wrapper } from "components/general";
import { Footer, TopNav } from "components/navigation";
import { ReactComponent as Map } from "assets/images/kaduna.svg"
import { ReactComponent as Document } from "assets/icons/document.svg"
import { ReactComponent as Globe } from "assets/icons/globe.svg"
import React, { useState } from "react";
import { socialLinks } from "utils/constants"

const About = () => {
    const [imageFocused, setImageFocused] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <AnimatePresence>
                {imageFocused && (
                    <motion.div className="h-screen bg-black/[.8] cursor-pointer fixed top-0 left-0 w-full z-[3] flex items-center justify-center"
                        onClick={() => setImageFocused(false)}
                    >
                        <motion.div layoutId={"ganiu-image"}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={ganiu} className="h-[300px] w-[300px] cursor-default object-contain md:object-cover md:w-[504px] md:h-[673px]" alt="ganiu olayinka" />
                        </motion.div>
                        <motion.button onClick={() => setImageFocused(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
            <TopNav />
            <Wrapper>
                <div className="pb-6 md:pb-[100px] lg:grid lg:grid-cols-2 lg:gap-x-[81px] px-5 lg:px-[50px] xt:px-[150px] max-w-xt pt-[20px] md:pt-[69px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setImageFocused(true)}
                        layoutId={"ganiu-image"} className="relative h-[400px] lg:h-[673px] w-[300px] lg:w-full">
                        <img src={ganiu} alt="Ganiu Olayinka" className="cursor-pointer absolute top-0 left-0 h-full w-full object-contain lg:object-cover" />
                        <Map className="hidden lg:block absolute top-[-73.97px] right-[-30px]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="mt-[30px] lg:mt-0 text-white text-[30px] leading-[40.31px] md:text-[60px] md:leading-[70.31px] mb-[18px] font-freight-regular">Hello,</h2>
                        <div>
                            <p className="font-axiforma-regular text-base leading-[30px] text-[18px] md:leading-[35px] text-white/[.6] mb-4">
                                I am Ganiu Odeyinka, a product designer; designing products that solves user problems.
                            </p>
                            <p className="font-axiforma-regular text-base leading-[30px] text-[18px] md:leading-[35px] text-white/[.6] mb-4">
                                I use my design thinking skills to simplify complex brand- user interactions,
                                solve design challenges for users and businesses, and build consistent
                                brand design experiences that foster trust and elevate meaningful
                                engagements.
                            </p>
                            <p className="font-axiforma-regular text-base leading-[30px] text-[18px] md:leading-[35px] text-white/[.6] mb-4">
                                I build delightfully usable interfaces that enhance customer experience
                                across web, apps, and other brand touchpoints, while positively
                                impacting business  objectives.
                            </p>
                            <p className="font-axiforma-regular text-base leading-[30px] text-[18px] md:leading-[35px] text-white/[.6] mb-4">
                                I have worked with some of the most ambitious industry leaders across
                                Fintech, Print, Insurance, Real Estate,  Talent upskilling, and more.
                            </p>
                            <p className="font-axiforma-regular text-base leading-[30px] text-[18px] md:leading-[35px] text-white/[.6] mb-4">
                                The next set of screens are a journey I&apos;d love to take you on. They
                                showcase some of the projects I have worked on.
                            </p>
                        </div>
                        <div className="mt-[30px] flex flex-col space-y-5 md:flex-row md:space-y-0 items-center md:space-x-5">
                            <button type="button" className="px-[30px] h-[64px] border border-[#FAFCFE]/[.2] flex items-center space-x-6">
                                <span className="font-freight-regular text-[20px] leading-[23.44px] text-[#F0F1F5]">View Resume</span>
                                <Document />
                            </button>
                            <a href={socialLinks.linkedIn}
                                rel="noreferrer"
                                target="_blank"
                                className="px-[30px] h-[64px] border border-[#FAFCFE]/[.2] flex items-center space-x-6">
                                <span className="font-freight-regular text-[20px] leading-[23.44px] text-[#F0F1F5]">View Linkedin</span>
                                <Globe />
                            </a>
                        </div>
                    </motion.div>
                </div>
                <Footer />
            </Wrapper>
        </motion.div>
    )
}

export default About