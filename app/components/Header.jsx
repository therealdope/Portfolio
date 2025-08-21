import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText'
import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText'
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import Orb from '../blocks/Backgrounds/Orb/Orb'

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
  className="relative flex items-center justify-center"
>
  <div className="relative w-52 h-52 md:w-60 md:h-60">
    {/* Orb on top */}
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Orb
        hoverIntensity={0.3}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
    </div>

    {/* Image below */}
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <Image
        src={assets.profile_img}
        alt=""
        className="rounded-full w-40 md:w-48 object-contain hover:scale-[1.05] transition-all duration-300"
      />
    </div>
  </div>
</motion.div>




        <motion.div 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay:0.3}}
      
        className='flex items-end gap-2 px-4 text-3xl md:text-4xl mb-5 -mt-4 font-bold font-mono rounded-full backdrop-blur-sm'>
            <DecryptedText
  text="Shwet Kheni"
  animateOn="view"
  revealDirection="start"
  maxIterations={20}
  speed={70}
  delay={1.5}
  sequential={true}
/>

            <Image src={assets.hand_icon} alt='' className='w-7 hover:animate-ping mb-1'/>

        </motion.div>

        <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className=''>
        {/* <img
          src={`https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=38&pause=300&color=${isDarkMode ? 'fff' : '111'}&center=true&vCenter=true&width=500&height=60&lines=I'm+Developer..;I'm+Engineer..`}
          alt="Typing SVG"
        /> */}
        <div className="flex justify-center">
          <div className="-mr-2 font-semibold text-gray-800 dark:text-gray-200 text-5xl px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg">
            I am
          </div>
<RotatingText
  texts={['Engineer', 'Developer', 'Designer']}
  mainClassName={`ml-1 font-semibold backdrop-blur-md border border-black dark:border-white text-5xl px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
  splitLetterClassName="text-transparent bg-clip-text bg-gradient-to-r
    from-gray-500 via-gray-700 to-gray-900
    dark:from-gray-100 dark:via-gray-300 dark:to-gray-600"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={4000}
/>


        </div>

        </motion.h1>
        
        <motion.p 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="max-w-2xl mx-auto mt-2 text-center text-sm md:text-lg px-4 md:flex"
>
  "Turning ideas into reality through code,{" "}
  <div className="flex justify-center">
  <GradientText
    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={3}
    showBorder={false}
    className="px-0.5"
  >
    Creativity
  </GradientText>
  and innovation."
  </div>
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
            href="https://drive.google.com/file/d/1jpbP6e3M7K_HB0bSzf35yh8udxgWiu1C/view?usp=sharing"
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
