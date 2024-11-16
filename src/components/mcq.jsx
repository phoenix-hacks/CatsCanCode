import React from 'react'

export default function Mcq({ question, showAnswer }) {
    // const options = [...question.options];
    // console.log(question);
    return (
        <div className='flex text-lightWhite flex-col mt-4 text-lg'>
            {question &&


                <div className='font-semibold'>{question.qno}. {question.text}
                    {
                        question.options.map((option, index) => {
                            if( showAnswer && option.opno == question.correctAns.opno ){
                                return (
                                    <div key={option.text} className='font-medium text-accent'> {option.opno}. {option.text}</div>
                                )
                            }
                            return (

                                <div key={option.text} className='font-medium'> {option.opno}. {option.text}</div>
                            )
                        })
                    }
                </div>

            }



        </div>
    )
}
