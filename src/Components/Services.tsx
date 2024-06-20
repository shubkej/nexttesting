'use clinet'
import { FaStream } from "react-icons/fa";
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const Services = () => {
    return (
    <div id="services" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[0%] left-[0%] right-[15%] lg:h-screen lg:mt-[128%] md:mt-[350%] mt-[600%]"> 
                <div className="flex flex-col justify-center items-center relative text-white">
                    <div className="absolute top-[5%] left-[15%]">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px] ">< FaStream className="text-sm"/> SERVICE</h3> 
                        <h1 className="lg:text-5xl md:text-5xl text-2xl lg:leading-[5rem] md:leading-[5rem] lg:mt-8 mt-5">My <span className="text-buttongreen">Specializations</span></h1>
                    </div>

                     <div className="flex flex-col justify-center items-center lg:mt-[25%]  md:mt-[35%] mt-[45%] lg:ml-0 md:ml-0 ml-[15%] gap-5">
                        <Card className="flex flex-row justify-center items-center py-4 px-2 bg-transparent rounded-xl w-[80%] hover:border-buttongreen border border-gray10">
                            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start gap-2">
                                <h4 className="font-bold text-large">Website Design</h4>
                                <p className="text-xs text-gray12 w-[80%]">I created digital products with unique ideas use Figma & Framer</p>
                                 <small className="text-default-500">12 PROJECTS</small>
                            </CardHeader>
                            <CardBody className="overflow-visible  ">
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={270}
                                />
                            </CardBody>
                        </Card>

                        <Card className="flex flex-row justify-center items-center py-4 px-2 bg-transparent rounded-xl w-[80%] hover:border-buttongreen border border-gray10">
                            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start gap-2">
                                <h4 className="font-bold text-large">Development</h4>
                                <p className="text-xs text-gray12 w-[80%]">I build website go live with Framer, Webflow or WordPress</p>
                                 <small className="text-default-500">14 PROJECTS</small>
                            </CardHeader>
                            <CardBody className="overflow-visible  ">
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                width={270}
                                />
                            </CardBody>
                        </Card>

                        <Card className="flex flex-row justify-center items-center py-4 px-2 bg-transparent rounded-xl w-[80%] hover:border-buttongreen border border-gray10">
                            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start gap-2">
                                <h4 className="font-bold text-large">SEO/Marketing</h4>
                                <p className="text-xs text-gray12 w-[80%]">Increase the traffic for your website with SEO optimized</p>
                                 <small className="text-default-500">8 PROJECTS</small>
                            </CardHeader>
                            <CardBody className="overflow-visible  ">
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg"
                                width={270}
                                />
                            </CardBody>
                        </Card>
                         
                     </div>
                </div>
    </div>
  );
}

export default Services;
