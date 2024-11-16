import React from 'react'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate=useNavigate();
  return (
    <>
      <div className='bg-bgBlack flex items-center justify-center  min-h-screen'>
        {/* <Navbar /> */}
        <div className='flex flex-col items-center justify-center size-full'>
          <motion.div className='text-[58px] bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white font-semibold max-w-[50rem]  text-center leading-[1.2]'
          initial={{y:30,opacity:0}}
          transition={{type:"tween",duration:0.38,ease:"circOut"}}
          animate={{y:0,opacity:1}}
          >
            Smarter Exams, Faster Prep <span className='text-transparent bg-clip-text  bg-gradient-to-r from-accent to-white animate-pulse '>Forge.ai</span> at Your Service
          </motion.div>
          <motion.div 
                    initial={{y:30,opacity:0}}
                    transition={{type:"tween",delay:0.3,duration:0.38,ease:"circOut"}}
                    animate={{y:0,opacity:1}}
          className='text-subText max-w-[30rem] text-center mt-6 text-lg'>Empowering educators and learners with AI-driven tools for effortless question paper generation, customizable quizzes, and seamless sharing for enhanced engagement.</motion.div>
          <div className='mt-16 relative  overflow-hidden rounded-full'>
            {/* <input placeholder='Enter Email' type='email' className='rounded-full overflow-hidden bg-transparent outline-none w-full text-white border-stroke/25 border-2 p-4' /> */}
            <div className='relative right-0 overflow-visible flex items-center justify-center p-3 h-full w-fit  top-0'>
              <motion.button 
                        initial={{y:200,paddingInline:"25px"}}
                        whileHover={{paddingInline:"50px"}}
                        transition={{type:"tween",delay:0.6,duration:0.8,ease:"circInOut",paddingInline:{delay:0}}}
                        animate={{y:0}}
              className=' bg-accent h-full  py-3 rounded-full [box-shadow:0px_0px_15px_#92E4F8] relative font-medium text-2xl hover:px-28 ' onClick={()=>navigate("/signin")}>Get Started</motion.button>
            </div>
          </div>
        </div>




      </div>
    </>
  )
}
