import React from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate=useNavigate();
  return (
    <>
      <div className='bg-bgBlack flex items-center justify-center  min-h-screen'>
        {/* <Navbar /> */}
        <div className='flex flex-col items-center justify-center size-full'>
          <div className='text-[58px] bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white font-semibold max-w-[50rem]  text-center leading-[1.2]'>
            Smarter Exams, Faster Prep BrainForge at Your Service
          </div>
          <div className='text-subText max-w-[30rem] text-center mt-6 text-lg'>Empowering educators and learners with AI-driven tools for effortless question paper generation, customizable quizzes, and seamless sharing for enhanced engagement.</div>
          <div className='mt-16 relative w-1/4 overflow-hidden rounded-full'>
            <input placeholder='Enter Email' type='email' className='rounded-full overflow-hidden bg-transparent outline-none w-full text-white border-stroke/25 border-2 p-4' />
            <div className='absolute right-0 overflow-visible flex items-center justify-center p-3 h-full w-fit  top-0'>
              <button className=' bg-accent h-full px-6 rounded-full [box-shadow:0px_0px_15px_#92E4F8] relative font-medium' onClick={()=>navigate("/signin")}>Sign In</button>
            </div>
          </div>
        </div>




      </div>
    </>
  )
}
