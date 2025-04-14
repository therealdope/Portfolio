import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'

const about = ({isDarkMode}) => {
  return (
    <div className='w-full px-4 sm:px-[8%] md:px-[12%] py-6 sm:py-10 scroll-mt-20' id='about'>
      <motion.h4
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.1}}
        className='text-center mb-2 text-base sm:text-lg font-Ovo border-b'>
        Introduction
      </motion.h4>
      <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'>
        About me
      </motion.h2>
    
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay:0.1}} 
          className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none hover:scale-[1.01] transition-all duration-300 dark:border'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>
    
        <div className="flex-1 w-full lg:w-auto">
          <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}className='mb-6 sm:mb-10 max-w-2xl font-Ovo text-sm sm:text-base text-center lg:text-left'
          >
            "Hello, I'm Shwet Kheni, a passionate computer science student at Nirma University with a keen interest in Web development and Software development. Explore my portfolio to see how I combine theoretical knowledge with practical skills to create innovative solutions."
          </motion.p>
        
          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0'>
            {infoList.map(({icon, iconDark, title, description},index)=>(
              <li 
                className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-rose-50 hover:-translate-y-1 transition duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-[#485799]/75'
                key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3'/>
                <h3 className='my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-sm sm:text-base'>{title}</h3>
                <p className='text-gray-600 text-xs sm:text-sm dark:text-white/80'>{description}</p>
              </li>
            ))}
          </motion.ul>
    
          <motion.h4
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}
            className='my-4 sm:my-6 text-gray-700 font-Ovo dark:text-white/80 text-center lg:text-left'>
            Tools & Platform I use,
          </motion.h4>
          
          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}} 
            className='flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap justify-center lg:justify-start'>
            {toolsData.map((tool, index)=>(
              <li 
                key={index} 
                className='flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={tool} alt={tool} className='w-4 sm:w-5 md:w-7'/>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default about
