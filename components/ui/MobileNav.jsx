"use client"

import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'


//use state 
const links =[
    {
      name: "home",
      path: "/"
    },
    {
      name: "About",
      path: "/aboutme"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
        name: "Contact",
        path: "/hireMe"
      },
  ]

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className = "flex flex-col">
            {/**Logo */}
            <DialogTitle className="mt-32 mb-40 text-center text-3xl font-medium">
              <Link href ="/">
                <h1>
                  Jerry<span className='text-accent'>.</span>
                </h1>
              </Link>
            </DialogTitle>
            {/**Navigation */}
            <nav className="flex flex-col justify-center items-center gap-8"> 
              {links.map((link,index) =>{ return(
              <Link href={link.path} key={index} className={`${link.path
                === pathname && "text-blue-400 border-b-2 border-blue-400"} 
                text-xl capitalize font-medium hover:text-blue-400 transition-all`}>
                {link.name}
              </Link>
              )})}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav