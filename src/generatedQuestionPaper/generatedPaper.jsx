import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mcq from "../components/mcq";
import { useLocation } from "react-router-dom";
export default function GeneratedPaper() {
    const location = useLocation();
    const data = JSON.parse(location.state);
    const questions = data.questions;
    const [showAnswer, setShowAnswer] = useState(false);

    // console.log(questions);
    return (
        <div className='h-screen overflow-scroll'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lightWhite text-2xl mt-16'>Generate</p>
                <p className='text-accent my-8 text-[3rem] font-medium'>
                    Question Paper
                </p>
            </div>
            <div className='flex flex-col rounded-2xl mx-32 p-8 bg-blackishGray border-stroke/25 border-[0.1rem] justify-start '>
                <div className='flex flex-row w-full justify-between align-middle'>
                    <div className='text-lightWhite font-semibold text-2xl'>
                        OOP With JAVA
                    </div>

                    <div className='flex flex-row gap-4'>
                        {showAnswer ? (
                            <button onClick={() => {
                                setShowAnswer(!showAnswer)
                            }}>
                                <img src='openeye.svg' alt='copy' className='w-8 h-8' />
                            </button>
                        ) : (
                            <button onClick={() => {
                                setShowAnswer(!showAnswer)
                            }}>
                                <img
                                    src='eye.svg'
                                    alt='copy'
                                    className='w-8 h-8 outline-none'
                                />
                            </button>
                        )}
                        <Link to=''>
                            <img
                                src='copy.svg'
                                alt='copy'
                                className='w-8 h-8'
                            />
                        </Link>
                        <Link to=''>
                            <img
                                src='quiz.svg'
                                alt='copy'
                                className='w-8 h-8'
                            />
                        </Link>
                        <button onClick={() => { }}>
                            <img
                                src='file.svg'
                                alt='copy'
                                className='w-8 h-8 outline-none'
                            />
                        </button>
                    </div>
                </div>

                <div className='text-lightWhite font-semibold text-xl text-left mt-2'>
                    Inheritance
                </div>
                <>
                    {questions.map((question, ind) => (
                        <Mcq
                            key={question.text}
                            question={question}
                            showAnswer={showAnswer}
                        />
                    ))}
                    <Mcq />
                </>
            </div>
        </div>
    );
}
