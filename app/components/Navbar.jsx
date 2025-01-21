'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
      <div className="fixed top-18 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <div className="hidden sm:flex md:block">
    <div className="slider-thumb1"></div>
    <div className="slider-thumb2"></div>
</div>


      

      <nav className={`w-full fixed px-5 lg:px-8 xl-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 dark:shadow-white/20" : ""}`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-lg px-8 py-3 ${isScroll ? "" : "bg-white shadow-md bg-opacity-50 dark:border dark:shadow-[#EB9FEF]/20 dark:border-white/20 dark:bg-transparent"} `}>
            <li><a className='font-Ovo' href="/#top">Home</a></li>
            <li><a className='font-Ovo' href="/#about">About me</a></li>
            <li><a className='font-Ovo' href="/#projects">Projects</a></li>
            <li><a className='font-Ovo' href="/#achievements">Achievements</a></li>
            <li><a className='font-Ovo' href="/#contact">Contact me</a></li>
        </ul>

        <div className='flex item-center gap-4'>
          <button className='border p-2 rounded-md dark:bg-rose-50' onClick={()=>setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          <div className="border rounded-md p-1 flex align-center justify-center dark:bg-rose-50">
            <a href="https://github.com/therealdope" target='_blank'>
              <Image src={assets.github} alt='' className='w-10 p-1' />
            </a>
            <a href="https://linkedin.com/in/shwet-kheni-658a33252" target='_blank'>
              <Image src={assets.linkedin} alt='' className='w-10 p-1' />
            </a>
          </div>
        
          <button className='block md:hidden ml-3 ' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>

        </div>

        {/* Mobile menu */}

        <ul ref={sideMenuRef}  className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500 dark:bg-darkHover dark:text-white'>
          
          <div className="absolute right-6 top-6" onClick={closeMenu}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#achievements">Achievements</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
            
        </ul>
      </nav>

    </>
  )
}

export default Navbar
