import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type:'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-36 md:w-40 hover:scale-[1.05] transition-all duration-300' />
        </motion.div>

        <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay:0.3}}
        
        className='flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo'>
            I'm Shwet Kheni
            <Image src={assets.hand_icon} alt='' className='w-6 hover:animate-ping'/>
        </motion.h3>

        <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className=''>
        <img
          src={`https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=38&pause=300&color=${isDarkMode ? 'fff' : '111'}&center=true&vCenter=true&width=500&height=60&lines=I'm+Developer..;I'm+Engineer..`}
          alt="Typing SVG"
        />
        </motion.h1>
        
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl text-xs md:text-lg mx-auto font-Ovo'>
        "Turning ideas into reality through code, creativity, and innovation."
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <div className="hover:translate-x-1 transition-all duration-300"><motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact" 
            className='px-8 py-3 rounded-lg bg-[#121212] text-white flex items-center gap-2 dark:border dark:border-white dark:bg-transparent'>Contact me
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </motion.a></div>
            
            <div className="hover:translate-y-1 transition-all duration-300">
            <motion.a
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            // link for resume
            href="https://mega.nz/folder/E2kmHbzT#I9sGMx2E9yqXNtIUvo9zgg"
            target='_blank'
            className='px-8 py-3 border rounded-lg border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume
            <Image src={assets.download_icon} alt='' className='w-4' />
            </motion.a>
            </div>
            
        </div>

    </div>
  )
}

export default Header
