'use clinet'
import { FaRegUser } from "react-icons/fa";
const About = () => {
    return (
    <div id="about" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[0%] left-[10%] right-[15%] lg:h-screen md:h-[65%] h-[75%] lg:mt-[50%] md:mt-[180%] mt-[310%]"> 
    
                <div className="flex flex-col justify-center items-center relative text-white">
                    <div className="absolute top-[10%] lg:left-[15%] md:left-[15%] left-[0%]">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px]  "><FaRegUser className="text-sm"/> ABOUT</h3> 
                        <h1 className="lg:text-7xl md:text-7xl text-3xl lg:leading-[5rem] md:leading-[5rem] mt-8">Every great design begin with an even better story</h1>
                        <p className="mt-14 w-[80%] lg:text-base md:text-xl text-gray12">Since beginning my journey as a freelance designer nearly 8 years ago, I&apos;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I&apos;m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                    </div>
                </div>
    </div>
    )
}

export default About