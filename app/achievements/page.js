'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { assets , achievementData } from '@/assets/assets'
import {motion} from 'motion/react'
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(()=>{
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    setIsDarkMode(true);
  }else{
    setIsDarkMode(false);
  }
},[]);

useEffect(() => {
  if(isDarkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
  }
},[isDarkMode]);

  
//   useEffect(() => {
//     alert("This page is not complete");
// }, []);
  return (
    <>
    <SmoothCursor />
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay:0.3}}
    className="w-full px-[12%] py-10">
      <div className="dark:text-white flex justify-between items-center mb-6">
        <Link href="/" passHref>
          <button className="flex items-center border p-2 rounded-md hover:-translate-x-1 transition-all duration-300">
            <Image
              src={isDarkMode ? assets.back_white : assets.back}
              alt="Go back"
              className="w-6"
            />
            <span className="ml-2">Back</span>
          </button>
        
        </Link>
        <button className='border p-2 rounded-md dark:bg-white' onClick={()=>setIsDarkMode(prev => !prev)}>
        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
        
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold mb-4 border-b pb-1 font-Ovo">Achievements</h1>

      <div className="grid grid-rows-auto lg:grid-cols-2 my-10 gap-5 text-black dark:text-white">
        {achievementData.map((achievement, index) => (
        <div key={index} className="rounded-md cursor-pointer group flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] w-full rounded-md border py-3 px-4 gap-4 items-center">
            <div className="flex justify-center items-center border rounded-md p-3">
              <Image 
                src={achievement.icon} 
                alt="Achievement Icon" 
                className="w-16 h-16 object-contain" 
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
              <div className="flex-grow">
                <h2 className="font-semibold text-lg mb-1">{achievement.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-200">{achievement.description}</p>
              </div>
              <a 
                href={achievement.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-3 md:mt-0 text-blue-600 dark:text-blue-300 hover:underline flex-shrink-0"
              >
                Link
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>

      
    </motion.div>
    </>
    
  );
};

export default Projects;
