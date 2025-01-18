'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { assets } from '@/assets/assets'


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
    <div className="w-full px-[12%] py-10">
      <div className="dark:text-white flex justify-between items-center mb-6">
        <Link href="/" passHref>
        <button className="flex items-center border p-2 rounded-md ">
                    <Image
                      src={isDarkMode ? assets.back_white : assets.back}
                      alt="Go back"
                      className="w-6"
                    />
                    <span className="ml-2">Back</span>
                  </button>
        </Link>
        <button className='border p-2 rounded-md' onClick={()=>setIsDarkMode(prev => !prev)}>
        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
        </button>
      </div>

      <h1 className="text-center text-3xl font-bold mb-4 border-b pb-1 font-Ovo">Projects</h1>
      <p className="text-center font-Ovo">
        Please go to my <a className='text-blue-700 underline dark:text-blue-300 ' href='#'>Github</a> profile to see more projects.
      </p>
    </div>
    </>
    
  );
};

export default Projects;
