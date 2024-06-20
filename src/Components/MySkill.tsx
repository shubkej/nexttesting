'use client'
import { RiShapesLine } from "react-icons/ri";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import myskillsData from '../data/skills.json';


interface Skills{  
        id: number,  
        title: string,  
        image: string,  
        percantage:number,
        isFeatured: boolean,  
}  


const MySkill = () => {

    const myskills = myskillsData.skills.filter((skillss:Skills) =>skillss.isFeatured);
  return (
    <div id="skills" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[0%] left-[0%] right-[15%] lg:h-screen lg:mt-[180%] md:mt-[440%] mt-[790%] "> 
                <div className="flex relative flex-col justify-center items-center  text-white">
                    <div className="absolute top-[10%] left-[15%]">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px]"><RiShapesLine className="text-sm"/> SKILLS</h3> 
                        <h1 className="lg:text-5xl md:text-5xl text-2xl lg:leading-[5rem] md:leading-[5rem] mt-8">My <span className="text-buttongreen">Advantages</span></h1>
                    </div>
                </div>

                    <div className="lg:mt-[20%] md:mt-[30%] mt-[45%] lg:ml-[15%] ml-[15%] ">
                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                                {
                                    myskills.map((skillss:Skills) => 
                                        (
                                            <div className="flex justify-center" key={skillss.id}>
                                                
                                                <BackgroundGradient className="flex flex-col rounded-3xl bg-cream h-full max-w-sm p-4 ">
                                                    <Image
                                                    src={skillss.image}
                                                    alt={skillss.title}
                                                    height="200"
                                                    width="150"
                                                    className="object-contain rounded-lg "
                                                    />
                                                    <div className="p-4 sm:p-2 flex flex-col items-center text-center flex-grow">
                                                            <p className="font-bold text-xl text-gray11 mt-1 ">{skillss.title}</p>
                                                            <p className="text-xl mt-1 ">
                                                                {skillss.percantage}%
                                                            </p>
                                                            
                                                    </div>
                                                </BackgroundGradient>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                </div>     
    </div>
    );
}

export default MySkill;
