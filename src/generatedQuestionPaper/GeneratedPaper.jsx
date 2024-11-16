import React from 'react'
import { Link } from 'react-router-dom'
import Mcq from '../components/mcq'

export default function GeneratedPaper() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lightWhite text-2xl mt-16'>Generate</p>
                <p className='text-accent my-8 text-[3rem] font-medium'>Question Paper</p>
            </div>
            <div className='flex flex-col rounded-2xl mx-32 p-8 h-[200rem] bg-blackishGray border-stroke/25 border-[0.1rem] justify-start '>
                <div className='flex flex-row w-full justify-between align-middle'>
                    <div className='text-lightWhite font-semibold text-2xl'>
                        OOP With JAVA
                    </div>

                    <div className='flex flex-row gap-4'>
                        <Link to="">
                            <img src='copy.svg' alt='copy' className='w-8 h-8' />
                        </Link>
                        <Link to="">
                            <img src='quiz.svg' alt='copy' className='w-8 h-8' />
                        </Link>
                        <Link to="">
                            <img src='file.svg' alt='copy' className='w-8 h-8' />
                        </Link>
                    </div>
                </div>

                <div className='text-lightWhite font-semibold text-xl text-left mt-2'>
                    Inheritance
                </div>

                <div className='flex text-lightWhite flex-col mt-4 text-lg'>
                    <div className='font-semibold'>1. What is a superclass?</div>
                    <div className='font-medium'>a. A class that inherits from another class.</div>
                    <div className='font-medium text-accent'>b. A class that is inherited by another class.</div>
                    <div className='font-medium'>c. A class that cannot be instantiated.</div>
                    <div className='font-medium'>d. A class that cannot be instantiated.</div>
                </div>

                <Mcq />

            </div>

        </>
    )
}
