import React from 'react'

export default function Mcq({ question, option1, option2, option3, option4, correctOption }) {
    return (
        <div className='flex text-lightWhite flex-col mt-4 text-lg'>
            <div className='font-semibold'>{question}</div>
            <div className='font-medium'>{option1}</div>
            <div className='font-medium text-accent'>{option2}</div>
            <div className='font-medium'>{option3}</div>
            <div className='font-medium'>{option4}</div>
        </div>
    )
}
