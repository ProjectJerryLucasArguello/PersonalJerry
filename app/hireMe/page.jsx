"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope} from "react-icons/fa"

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "862-444-8076"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "argjerryl@gmail.com"
  },
]

import { motion } from "framer-motion";

const Contact  = () => {
  return (
   <motion.section
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6"
   >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          {/**form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/70">
                    I hope to be an impact towards your future projects, and
                    that I will respond to your email in a timely manner!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstName" placeholder="FirstName" />
                  <Input type="lastName" placeholder="LastName" />
                  <Input type="email" placeholder="Email" />
                  <Input type="phone" placeholder="Phone" />
                </div>
                {/**Select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Roles"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="font-semibold">Select a role needed for the job</SelectLabel>
                      <SelectItem value="backend"> Backend Developer</SelectItem>
                      <SelectItem value="frontend"> Frontend Developer</SelectItem>
                      <SelectItem value="fullstack"> Fullstack Developer</SelectItem>
                      <SelectItem value= "cst">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/**Textarea */}
                <Textarea className="h-[200px]" placeholder="Type your message" />
                <Button size="md" className="max-w-40 justify-center">
                  Send
                </Button>
              </form>
          </div>
          {/**info */}
          <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item,index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
   </motion.section>
  )
}

export default Contact