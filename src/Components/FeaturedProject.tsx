import { cn } from "@/utils/cn";
import { BiGridVertical } from "react-icons/bi";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FeaturedProject() {
    return (

    <div id="portfolio" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[10%] right-[15%] lg:h-screen lg:mt-[238%] md:mt-[550%] mt-[1380%] "> 
                <div className="flex relative flex-col justify-center items-center text-white">
                    <div className="absolute top-[10%] lg:left-[15%] md:left-[5%]">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px] ">< BiGridVertical className="text-sm"/>PORTFOLIO</h3> 
                        <h1 className="lg:text-5xl md:text-5xl text-2xl lg:leading-[5rem] md:leading-[5rem] mt-8">Featured  <span className="text-buttongreen">Projects</span></h1>
                    </div>
                </div>
                    <BentoGrid className="max-w-4xl mx-auto lg:mt-[20%] md:mt-[30%] mt-[35%] p-5 lg:ml-[10%] md:ml-[2%] ml-[15%] ">
                    {items.map((item, i) => (
                        <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                    </BentoGrid>

        </div>

    );
}

const items = [
    {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Image alt="person1" width={500} height={500} src={"https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio1.jpg"} className="object-cover overflow-hidden"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-buttongreen" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Image alt="person1" width={500} height={500} src={"https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio2.jpg"} className="object-cover overflow-hidden"/>,
        icon: <IconFileBroken className="h-4 w-4 text-buttongreen" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Image alt="person1" width={500} height={500} src={"https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio3.jpg"} className="object-cover overflow-hidden"/>,
        icon: <IconSignature className="h-4 w-4 text-buttongreen" />,
    },
    {
        title: "The Power of Communication",
        description:
        "Understand the impact of effective communication in our lives.",
        header: <Image alt="person1" width={500} height={500} src={"https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="object-cover overflow-hidden"/>,
        icon: <IconTableColumn className="h-4 w-4 text-buttongreen" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Image alt="person1" width={500} height={500} src={"https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio5.jpg"} className="object-cover overflow-hidden"/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4  text-buttongreen" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Image alt="person1" width={500} height={500} src={"https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  className="object-cover overflow-hidden"/>,
        icon: <IconBoxAlignTopLeft className="h-4 w-4  text-buttongreen" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Image alt="person1" width={500} height={500} src={"https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="object-cover overflow-hidden"/>,
        icon: <IconBoxAlignRightFilled className="h-4 w-4  text-buttongreen" />,
    },
    ];
