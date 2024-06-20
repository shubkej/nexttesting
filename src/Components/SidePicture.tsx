import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";


const SidePicture = () => {
  return (
    <div className="lg:fixed absolute z-10 lg:w-[23%] w-[90%] h-[185%] lg:h-[90%] md:h-[100%] md:left-[8%] lg:left-[0%] sm:h-[120%] bg-transparent top-8 ml-2 lg:ml-5 rounded-3xl lg:border border-gray10 md:w-[80%]   ">
        {/* sideSection */}
        <div className="flex absolute h-[80px] w-[90%] rounded-lg lg:m-4 m-7 md:justify-center  ">
                <div className="flex justify-center items-center sm:top-[60px] lg:m-5 m-7 gap-8 text-white">
                    <h2 className="lg:text-3xl font-mono font-extrabold md:text-4xl text-xl">Shubham Kejriwal</h2>
                    <p className="lg:text-sm font-Roboto md:text-xl">Full Stack web developer</p>
                </div>

                <div className="absolute lg:w-full w-[100%] lg:top-[120%] flex justify-center md:top-[180%] md:w-[80%] top-[115%]  ">
                    <Image width={500} height={500} src="/shubham.JPG" alt="shubham" className="rounded-3xl w-[80%]" />
                </div> 

                <div className=" absolute w-full lg:top-[460%] md:top-[670%] top-[500%] text-white">
                        <div className="flex flex-col items-center justify-center text-gray12">
                            <h2 className="md:text-xl lg:text-base">shubhamkejriwal34@gmail.com</h2>
                            <p className="lg:text-xs md:text-lg mt-5">©2024 shuhbam.All Rights Reserved</p>
                        </div>

                        <div className="gap-2 mt-6">
                                <ul className="flex justify-evenly items-center ">
                                    <Link href={"/#"}><li className="border rounded-full p-4 hover:bg-gray10 "><FaInstagram /></li></Link>
                                    <Link href={"/#"}><li className="border rounded-full p-4 hover:bg-gray10 "><FaTwitter /></li></Link>
                                    <Link href={"/#"}><li className="border rounded-full p-4 hover:bg-gray10 "><FaGithub /></li></Link>
                                    <Link href={"/#"}><li className="border rounded-full p-4 hover:bg-gray10 "><FaLinkedin /></li></Link>
                                </ul>
                        </div>

                        <div className="flex justify-center mt-10">
                                    <button className="w-[90%] py-4 px-2 flex justify-center items-center gap-4 bg-buttongreen rounded-3xl text-gray11"><SlEnvolope className="text-[20px]" />HIRE ME!</button>
                        </div>
                </div>
        </div>
    </div>

  );
}

export default SidePicture;

