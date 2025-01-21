"use client" //Notify program this is a client based component

import Link from 'next/link'
import { usePathname } from 'next/navigation'
{/**Clent End */}

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
]

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='flex gap-6'>
      {/**Mapping all links */}
      {links.map((link,index) =>{ 
        return(
          <Link href={link.path} key={index} className={`${link.path
          === pathname && "text-blue-400 border-b-2 border-blue-400"} 
          capitalize font-medium hover:text-blue-400 transition-all`}>
            {link.name}
          </Link>
          ) 
      })}
    </nav>
    
  )
}

export default NavBar