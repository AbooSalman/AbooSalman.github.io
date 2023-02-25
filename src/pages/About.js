import ganiu from "assets/images/ganiu/image-1.png"
import { Wrapper } from "components/general";
import { Footer, TopNav } from "components/navigation";
import { ReactComponent as Map } from "assets/images/kaduna.svg"
import { ReactComponent as Document } from "assets/icons/document.svg"
import { ReactComponent as Globe } from "assets/icons/globe.svg"
import React from "react";

const About = () => (
    <div>
        <TopNav />
        <Wrapper>
            <div className="pb-[100px] grid grid-cols-2 gap-x-[81px] max-w-xt px-[150px] pt-[69px] mx-auto">
                <div className="relative h-[673px] w-full">
                    <img src={ganiu} alt="Ganiu Olayinka" className="absolute top-0 left-0 h-full w-full object-cover" />
                    <Map className="absolute top-[-73.97px] right-[-30px]" />
                </div>
                <div>
                    <h2 className="text-white text-[60px] leading-[70.31px] mb-[18px] font-freight-regular">Hello,</h2>
                    <div>
                        <p className="font-axiforma-regular text-[18px] leading-[35px] text-white/[.6] mb-4">
                            I am Ganiu Odeyinka, a product designer; designing products that solves user problems.
                        </p>
                        <p className="font-axiforma-regular text-[18px] leading-[35px] text-white/[.6] mb-4">
                            I use my design thinking skills to simplify complex brand- user interactions,
                            solve design challenges for users and businesses, and build consistent
                            brand design experiences that foster trust and elevate meaningful
                            engagements.
                        </p>
                        <p className="font-axiforma-regular text-[18px] leading-[35px] text-white/[.6] mb-4">
                            I build delightfully usable interfaces that enhance customer experience
                            across web, apps, and other brand touchpoints, while positively
                            impacting business  objectives.
                        </p>
                        <p className="font-axiforma-regular text-[18px] leading-[35px] text-white/[.6] mb-4">
                            I have worked with some of the most ambitious industry leaders across
                            Fintech, Print, Insurance, Real Estate,  Talent upskilling, and more.
                        </p>
                        <p className="font-axiforma-regular text-[18px] leading-[35px] text-white/[.6] mb-4">
                            The next set of screens are a journey I&apos;d love to take you on. They
                            showcase some of the projects I have worked on.
                        </p>
                    </div>
                    <div className="mt-[30px] flex items-center space-x-5">
                        <button type="button" className="px-[30px] h-[64px] border border-[#FAFCFE]/[.2] flex items-center space-x-6">
                            <span className="font-freight-regular text-[20px] leading-[23.44px] text-[#F0F1F5]">View Resume</span>
                            <Document />
                        </button>
                        <button type="button" className="px-[30px] h-[64px] border border-[#FAFCFE]/[.2] flex items-center space-x-6">
                            <span className="font-freight-regular text-[20px] leading-[23.44px] text-[#F0F1F5]">View Linkedin</span>
                            <Globe />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    </div>
)

export default About