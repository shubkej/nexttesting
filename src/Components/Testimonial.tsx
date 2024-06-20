import { MdOutlineInsertComment } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image:"https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image:"https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const Testimonial = () => {
    return (
    <div id="testimonial" className="absolute py-12 bg-gray11 lg:left-[25%] md:left-[10%] left-[10%] right-[15%] lg:h-screen md:h-[60%] h-[80%] lg:mt-[320%] md:mt-[700%] mt-[1930%] "> 
                <div className="flex relative flex-col justify-center items-center text-white">
                    <div className="absolute top-[10%] lg:left-[15%] md:left-[5%]  ">
                        <h3 className="flex text-center gap-2 border border-gray10 rounded-2xl px-5 py-2 text-xs w-[140px] "><MdOutlineInsertComment className="text-sm"/>TESTIMONIAL</h3> 
                        <h1 className="lg:text-5xl md:text-4xl text-2xl lg:leading-[5rem] md:leading-[5rem] mt-8">Trusted by <span className="text-buttongreen"> Hundered Clients</span></h1>
                    </div>
                </div>

                {/* moving testi... */}
            <div className="lg:mt-[20%] md:mt-[25%] mt-[45%] lg:ml-[10%] gap-5">   
                <div className="lg:h-[20rem] md:h-[25rem] h-[25rem] rounded-md flex flex-col antialiased bg-gray11 items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="normal"
                    />
                </div>
            </div>
    </div> 
    
    );
}

export default Testimonial;
