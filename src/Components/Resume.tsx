'use clinet'
import { CgBriefcase } from "react-icons/cg";
const Resume = () => {
  return (
  <div id="resume" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[0%] left-[0%] right-[15%] lg:h-screen md:h-[55%] h-[75%] lg:mt-[90%] md:mt-[280%] mt-[460%] "> 
                <div className="flex relative flex-col justify-center items-center text-white">
                    <div className="absolute top-[10%] left-[15%]">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px]">< CgBriefcase className="text-sm"/> RESUME</h3> 
                        <h1 className="lg:text-5xl md:text-5xl text-2xl lg:leading-[5rem] md:leading-[5rem] mt-8">Education & <span className="text-buttongreen">Experience</span></h1>
                        
                        <div className="flex flex-col gap-10 mt-10">
                            <div className="flex flex-col gap-5">
                            <p className="text-gray10">2024 -Present</p>
                            <h2 className="">Parul University , Vadodara</h2>
                            <p className="text-white">Master of Computer Application-Full Stack | CGPA- 9.31 </p>
                            </div>
                            <hr className="text-gray12" />

                            <div className="flex flex-col gap-5">
                                <p className="text-gray10">2020-2023</p>
                                <h2>SAGE University Bhopal</h2>  
                                <p className="text-white">Bachelor of Computer Application | CGPA- 9.06 </p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default Resume;
