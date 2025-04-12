import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'motion/react'

const Footer = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay:0.1}}
     className='mt-20'>
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className="w-max flex items-center gap-2 mx-auto border-b">
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
        skheni02@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> &copy;2025 Shwet Kheni. All Rights Reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:px-1 sm:mt-0 underline'>
            <li><a target='_blank' href="https://github.com/therealdope">Github</a></li>
            <li><a target='_blank' href="https://linkedin.com/in/shwetkheni">LinkedIn</a></li>
            <li><a target='_blank' href="https://discord.com/users/bubbly_beetle_82363">Discord</a></li>
            <li><a target='_blank' href="https://instagram.com/shwet_kheni">Instagram</a></li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Footer
