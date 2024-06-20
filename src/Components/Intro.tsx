'use client';
import Typewriter from 'typewriter-effect';
import { MdOutlineHome } from "react-icons/md";

const Intro = () => {
    return (
        <div className="lg:left-[25%] bg-transparent text-white w-[75%] lg:h-screen md:h-[70%] sm:h-[100%] h-[70%] top-[80%] md:top-[70%] sm:top-[40%] lg:top-0 absolute    ">
                <div className="flex justify-center items-center">
                    <div className="absolute top-[12%] left-[15%] ">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px] "><MdOutlineHome className="text-base"/> INTRODUCE</h3> 
                        <h1 className="lg:text-7xl md:text-5xl text-4xl lg:leading-[5rem] lg:mt-20 md:mt-10 mt-10  ">
                            I am <span className="text-buttongreen">Shubham Kejriwal</span>, 
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'Web Designer','FrontEnd Developer'],
                                    autoStart: true,
                                    loop: true,
                            }}
                            /> 
                        </h1>
                        <p className="mt-20 w-[51%] text-gray12">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    </div>
                </div>
                  {/* moving cirle */}
                <div className="circle  absolute lg:top-[65%] top-[50%] md:top-[45%] lg:left-[65%] md:left-[80%] left-[65%]">
                    <div className="logo">
                    </div>
                </div>
        </div>
        
    );
}

export default Intro;
