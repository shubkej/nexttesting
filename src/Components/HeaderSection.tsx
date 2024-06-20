'use client';

import React from "react"; 

        
const HeaderSection = () => {
  return (
    <div className=" lg:max-w-full lg:w-[110%] w-[100%] bg-gray11 relative lg:h-screen h-screen overflow-hidden">
            {/* video */}
            <div className="absolute lg:w-full w-[100%] h-[100%] lg:h-full overflow-hidden sm:invisible invisible lg:visible z-[2] opacity-[0.2]">
                <video src="video2.mp4" autoPlay loop muted className=" absolute z-[-3] w-full  "/>
            </div>
    </div>
  );
}

export default HeaderSection;
