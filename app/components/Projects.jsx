import React from 'react'
import { assets ,workData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'
import Link from 'next/link';

const Work = ({isDarkMode, onShowMore}) => {
  return (
    <div 
    className='w-full px-[12%] py-10 scroll-mt-20' id='projects'>
        <motion.h4 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}}
        className='text-center mb-2 text-lg font-Ovo border-b'>My Work</motion.h4>
        <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}} 
        className='text-center text-5xl font-Ovo'>Projects</motion.h2>
    
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >"Here are some of the projects I've worked on, showcasing my skills with deep understanding."</motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black">
            {workData.map((project, index)=>(
            <div
                key={index} 
                style={{backgroundImage: `url(${project.bgImage})`}} 
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"> 

                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500">
                    <a href={project.link}>
                        <div className="">
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                    </a>
                    <div className="border rounded-md border-black w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition">
                        <Image src={project.icon} alt='send icon' className='' />
                    </div>
                </div>
            </div>
            ))}
        </motion.div>

        <Link href = "/projects" passHref
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-lg py-2 px-8 mx-auto my-20 hover:translate-x-1 duration-300 dark:text-white dark:border-white'
        onClick={onShowMore}>
        <abbr title='Go to Github to see my projects'>Show More</abbr>
        
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
        </Link>
            
            
        
    </div>
  )
}

export default Work
