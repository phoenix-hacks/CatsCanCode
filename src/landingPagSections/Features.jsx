import React from 'react'
import Card from '../components/card'
import { motion } from 'framer-motion'
export default function Features() {

  const Link04Icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>



  return (
    <div className='min-h-screen'>
      <div className=' w-auto flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          {/* <motion.p 
          initial={{y:-20,opacity:0}}
          transition={{type:"tween",ease:"easeInOut",delay:0.5,duration:0.28}}
          animate={{y:0,opacity:1}}
          className='text-accent text-[2rem] font-medium'>
            Features
          </motion.p> */}

        </div>
        <motion.div
                  initial={{opacity:0}}
                  transition={{type:"tween",ease:"easeInOut",delay:1.5,duration:0.38}}
                  animate={{opacity:1}}
        
        className='flex md:flex-row flex-col mt-[10rem] justify-center max-w-7xl gap-16'>

          <Card 
          icon="/public/paper.svg" title="Question Paper Generation" description="Quickly generate customized question papers tailored to specific subjects, topics, and difficulty levels." />
          <Card icon="/public/pencil.svg" title="Customization and Export Options" description="Fine-tune questions, set time limits, and format papers or quizzes as needed." />
          <Card icon="/public/link.svg" title="Shareable Quizzes via Link" description="Create interactive quizzes and share them effortlessly using a unique link." />
        </motion.div>

          <motion.p 
                    initial={{y:-20,opacity:0}}
                    transition={{type:"tween",ease:"easeInOut",delay:0.8,duration:0.38}}
                    animate={{y:0,opacity:1}}
          className='max-w-[40vw] mt-16 bg-clip-text text-transparent bg-gradient-to-r  text-2xl from-white/20 to-white font-semibold text-center'>
            Transforming education with tools that save time, ensure quality, and enable seamless quiz sharing.
          </motion.p>
      </div>
    </div>
  )
}
