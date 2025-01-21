"use client"

import { motion } from "framer-motion"
import React, {useState} from "react"

import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num:"01",
    category: "full-stack",
    title: "Final Exam Tracker",
    framework: [{name:"Flask/Python"}, {name:"MySQL/SQLAlchemy"}, {name:"Next.js"}, {name:"TailWindCSS"} ],
    image:"/assets/final_exam.webp",
    source: "https://github.com/ProjectJerryLucasArguello/FullStackFinalExamOrganizer"
  },
  {
    num:"02",
    category: "full-stack",
    title: "NFL History",
    framework: [{name:"SpringBoot/Java"}, {name:"PostgreSQL"}, {name:"React.js"}, {name:"TailWindCSS/CSS"} ],
    image:"/assets/NFL.webp",
    source:"https://github.com/ProjectJerryLucasArguello/NFLFullstack"
  },
  {
    num:"03",
    category: "Data Mangament",
    title: "Final Exam Organizer",
    framework: [{name:"Jupyter Notebook"}, {name:"Python"}],
    image:"/assets/Nav_njit-primarylogo.webp",
    source:"https://github.com/ProjectJerryLucasArguello/FinalExamOrganizerScrapper"
  },
  {
    num:"04",
    category: "UX/UI Design",
    title: "Study Application Design",
    framework: [{name:"Figma"}],
    image:"/assets/robot_blue.webp",
    source:"https://docs.google.com/document/d/1aA03IFz2t7umrAS9_HBXocSbCKKcFrvp-ePgrVnGTnk/edit?usp=sharing"
  },
]

const Projects = () => {
  const [project, setProjects] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProjects(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
            xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/**outline num */}
                <div className="text-8xl leading-none font-extrabold">
                    {project.num}
                </div>
                {/**project title */}
                <h2 className="text-[42px] font-bold leading-none text-white
                 group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <h3 className="text-white/60 text-[20px]">{project.category} project</h3>
                {/**tech stack */}
                <ul className="flex flex-wrap gap-2 sm:gap-4 text-center">
                    {project.framework.map((item, index) => {
                      return(
                        <li key={index} className="text-xl text-accent">
                          {item.name}
                          {index !== project.framework.length - 1 && ","}
                        </li>                        
                      );
                    })}
                </ul>
                {/**border */}
                <div className="border border-white/20"></div>
                {/**buttons */}
                <div className="flex items-center gap-4">
                  {/**GitHub Project*/}
                  <Link href={project.source}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent "/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>GitHub Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                  {projects.map((project, index) => {
                    return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/** overlay*/}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/** image */}
                        <div className="realtive w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                  {/**Slider Buttons */}
                  <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                  w-[44px] flex justify-center items-center transition-all"
                  />
              </Swiper>
            </div>
        </div>
      </div>
    </motion.section>
    
  )
}

export default Projects