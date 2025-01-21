import Link from 'next/link';
import { Button } from './button'
import React from 'react';

import NavBar from './NavBar';
import MobileNav from './MobileNav';

const MenuBar = () => {
  return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
               {/* logo */} 
               <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Jerry<span className='text-blue-400'>.</span>
                    </h1>
               </Link>
               {/* desktop navigation & contact button */}
               <div className='hidden xl:flex items-center gap-8'>
                  <NavBar />
                  <Link href="/hireMe">
                    <Button className="bg-cyan-500">Contact Me</Button>
                  </Link>
               </div>

               {/**Mobile friendly */}
               <div className='xl:hidden'>
                  <MobileNav />
               </div>
            </div>
        </header>     
  );
};

export default MenuBar;