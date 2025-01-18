'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'motion/react'

const Contact = ({isDarkMode}) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "db4b8b31-4d93-4223-817d-28eb71ab4b60");
  
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

        <h4 
        className='text-center mb-2 text-lg font-Ovo border-b'>connect with me</h4>
        
        <h2 
        className='text-center text-5xl font-Ovo'>Get in touch</h2>
    
        <p 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >"Feel free to reach out to me for collaborations, project inquiries, or just to connect — I'd love to hear from you!"</p>

        <form
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                <input
                type="text" placeholder='Enter your Name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                name='name'/>
                <input 
                type="email" placeholder='Enter your email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                name='email'/>
            </div>
            <textarea 
            rows='6' placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg0white mb-6 dark:bg-darkHover/30 dark:border:white/90'
            name='message'></textarea>

            <div className="text-red-500 mb-2 -mt-2">Submit Button will directly send gmail to me!</div>
            <button
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black hover:translate-x-1 duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>
            Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>
            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact
