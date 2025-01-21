import React from 'react'
import { assets , achievementData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link';
import {motion} from 'motion/react'

const Achivements = ({achivements, isDarkMode}) => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='achievements'>
    
      <motion.h4
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay:0.1}}
      className='text-center mb-2 text-lg font-Ovo border-b'>
      My Accomplishment
      </motion.h4>
      <motion.h2
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay:0.1}} 
      className='text-center text-5xl font-Ovo'>
      Achievements
      </motion.h2>
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay:0.1}} 
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      "Here are some of my proudest achievements, reflecting my dedication, skills, and passion for continuous learning and growth."
      </motion.p>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay:0.1}}
       className="grid grid-rows-auto lg:grid-cols-2 my-10 gap-5 text-black dark:text-white">
              {achievementData.slice(0,3).map((achievement, index) => (
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
            </motion.div>

      <Link href = "/achievements" passHref
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-lg py-2 px-8 mx-auto my-20 hover:translate-x-1 duration-300 dark:text-white dark:border-white '
      onClick={achivements}>
      Show More
      <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </Link>


    </div>
  )
}

export default Achivements
