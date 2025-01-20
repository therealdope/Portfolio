import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'

const about = ({isDarkMode}) => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>

    <motion.h4
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.1}}
    className='text-center mb-2 text-lg font-Ovo border-b'>Introduction</motion.h4>
    <motion.h2
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay:0.1}}
    className='text-center text-5xl font-Ovo'>About me</motion.h2>
    
    <div 
    className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}} 
        className='w-64 sm:w-80 rounded-3xl max-w-none hover:scale-[1.01] transition-all duration-300'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>

        <div 
        className="flex-1">
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}className='mb-10 max-w-2xl font-Ovo'
            >"Hello, I'm Shwet Kheni, a passionate computer science student at Nirma University with a keen interest in Web development and Software development. Explore my portfolio to see how I combine theoretical knowledge with practical skills to create innovative solutions."</motion.p>
        
            <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},index)=>(
                    <li 
                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                    key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </li>
                ))}
            </motion.ul>

            <motion.h4
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools & Platform I use, </motion.h4>
            <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}} 
            className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                    <li 
                    key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointe hover:-translate-y-1 duration-500'>
                        <Image src={tool} alt={tool} className='w-5 sm:w-7'/>
                    </li>
                ))}
            </motion.ul>
        </div>
    </div>

    </div>
  )
}

export default about
