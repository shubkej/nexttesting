'use clinet'   
import HeaderSection from "@/Components/HeaderSection";
import About from "@/Components/About";
import Resume from "@/Components/Resume";
import Services from "@/Components/Services";
import MySkill from "@/Components/MySkill";
import FeaturedProject from "@/Components/FeaturedProject";
import Testimonial from "@/Components/Testimonial";
import Contact from "@/Components/Contact";
import Intro from "@/Components/Intro";


export default function Home() {
    return (
      <main className=" flex flex-col min-h-screen relative ">
          <HeaderSection/>
          <Intro/>
          <About/>
          <Resume/>
          <Services/>
          <MySkill/>
          <FeaturedProject/>
          <Testimonial/>
          <Contact/>
      
      </main>
);
}