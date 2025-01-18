import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
        22bce337@nirmauni.ac.in
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> &copy;2025 Shwet Kheni. All Rights Reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 underline'>
            <li><a target='_blank' href="#">Github</a></li>
            <li><a target='_blank' href="#">LinkedIn</a></li>
            <li><a target='_blank' href="#">Twitter</a></li>
            <li><a target='_blank' href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
