import { MdOutlineHome } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CgBriefcase } from "react-icons/cg";
import { FaStream } from "react-icons/fa";
import { RiShapesLine } from "react-icons/ri";
import { BiGridVertical } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
import {Tooltip, Button} from "@nextui-org/react";

  

const RightSideBar = () => {
  return (
    <div className="fixed right-[60px] top-[25%] bg-transparent h-[50%] w-[4%] z-10 border border-gray12 rounded-full invisible  md:invisible lg:visible ">
            <div>
                <ul className="flex flex-col justify-center items-center text-gray12 mt-5 ">
                    <Link href={"/"}><li className="text-[20px] p-1 text-center mb-1"><Tooltip className="text-gray12" content="Home" placement="left">
                      <Button className="text-white"><MdOutlineHome/></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#about"}><li className="text-[18px] p-1 text-center mb-1"><Tooltip className="text-gray12" content="About" placement="left">
                      <Button className="text-white"><FaRegUser /></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#resume"}><li className="text-[18px] p-1 text-center mb-1"><Tooltip className="text-gray12" content="Resume" placement="left">
                      <Button className="text-white"><CgBriefcase /></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#services"}><li className="text-[18px] p-1 text-center mb-1"> <Tooltip className="text-gray12" content="Services" placement="left">
                      <Button className="text-white"><FaStream /></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#skills"}><li className="text-[18px] p-1 text-center mb-1"><Tooltip className="text-gray12" content="Skills" placement="left">
                      <Button className="text-white"><RiShapesLine /></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#portfolio"}><li className="text-[18px] p-1 text-center mb-1"><Tooltip className="text-gray12" content="Portfolio" placement="left">
                      <Button className="text-white"><BiGridVertical /></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#testimonial"}><li className="text-[18px] p-1 text-center mb-1"> <Tooltip className="text-gray12" content="Testimonial" placement="left">
                      <Button className="text-white"><MdOutlineInsertComment /></Button>
                    </Tooltip></li></Link> 
                    <Link href={"#contact"}><li className="text-[18px] p-1 text-center  mb-1"> <Tooltip className="text-gray12" content="Contact" placement="left">
                      <Button className="text-white"><FaRegEnvelope /></Button>
                    </Tooltip></li></Link> 
                  </ul>
            </div>
    </div>
  );
}

export default RightSideBar;
