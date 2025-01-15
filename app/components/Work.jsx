import React from 'react'
import { assets ,workData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>my latest work</motion.h2>
    
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est debitis quidem aperiam aliquid deserunt ullam saepe, nostrum dolor repellat aspernatur vel minima soluta omnis officiis voluptates dolorem atque? Ducimus, nobis illum at dicta unde odit adipisci consequatur veritatis perferendis incidunt molestiae soluta quas, quae amet cum delectus quidem ratione.</motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black">
            {workData.map((project, index)=>(
            <motion.div
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} 
                style={{backgroundImage: `url(${project.bgImage})`}} 
                className="aspect-square bg-no-repeat bg-cover bg-cneter rounded-lg relative cursor-pointer group"> 

                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500">
                    <div className="">
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                        <Image src={assets.send_icon} alt='send icon' className='' />
                    </div>
                </div>
            </motion.div>
            ))}
        </motion.div>

        <motion.a 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 1.1}}
        href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
        </motion.a>
    </motion.div>
  )
}

export default Work
