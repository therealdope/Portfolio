'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'motion/react'
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';

const Contact = ({isDarkMode}) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c37b353e-703d-4f16-9055-d4cba68c3f3e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div 
    className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' id='contact'>

        <motion.h4
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}} 
        className='text-center mb-2 text-lg font-Ovo border-b'>
        <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Connect with me
</GradientText></motion.h4>
        
        <motion.h2 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}}
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
    
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.1}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >"Feel free to reach out to me for collaborations, project inquiries, or just to connect — I'd love to hear from you!"</motion.p>

        <form
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}
             className="grid grid-cols-auto gap-6 mt-10 mb-8">
                <input
                type="text" placeholder='Enter your Name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                name='name'/>
                <input 
                type="email" placeholder='Enter your Email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                name='email'/>
            </motion.div>
            <motion.textarea 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.1}}
            rows='6' placeholder='Enter your Message to me!' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg0white mb-6 dark:bg-darkHover/30 dark:border:white/90'
            name='message'></motion.textarea>

            <button
            className='py-3 px-6 w-max flex items-center justify-between gap-2 bg-[#121212] text-white rounded-lg mx-auto hover:translate-x-1 duration-500 dark:bg-transparent dark:border-[0.5px]' type='submit'>
            let's talk <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>
            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact
