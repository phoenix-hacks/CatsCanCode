import React, { useEffect, useState } from "react";
import { useFullScreenHandle } from "react-full-screen";

const options = [
  "A process is a program; a thread is a part of it.",
  "A process runs independently; a thread cannot.",
  "Threads use separate memory; processes share memory.",
  "A process can have multiple threads.",
];

const questions = [
  "What is the main function of an operating system?",
  "What is a process in an operating system?",
  "What is the key difference between a thread and a process?",
  "Which of the following is NOT a type of operating system?",
  "Which scheduling algorithm is used by default in most UNIX systems?",
  "Which of the following is an example of a monolithic kernel?",
  "What is a deadlock in an operating system?",
  "What does the term 'multitasking' mean in an OS?",
  "Which component is responsible for managing memory in an operating system?",
  "What is virtual memory?",
  "Which of the following is an example of a real-time operating system?",
  "What is a file system?",
  "Which of these is a common function of an OS kernel?",
  "Which of the following is NOT a type of file system?",
  "What is the role of the I/O manager in an operating system?",
  "What does the term 'context switching' refer to in an OS?",
  "Which of the following is NOT typically a part of an operating system?",
  "What is a shell in an operating system?",
  "What is the primary purpose of the file system's directory structure?",
  "What does 'multithreading' refer to in an OS?",
];

const close = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  </>
);

const Quiz = () => {
  const [name, setName] = useState(null);

  return <>{name ? <QuizPage name={name} /> : <Name setName={setName} />}</>;
};

const Name = ({setName}) => {
  return (
    <>
      <div className="size-full flex flex-col gap-2 bg-bgBlack items-center justify-center text-white">
        <div className="w-fit flex flex-col items-center justify- gap-2">
          <div className="text-2xl">What should we call you?</div>
          <input
            onKeyDown={(e) => {
                if(e.keyCode == 13){
                    document.documentElement.requestFullscreen()
                    setName(e.target.value)
                }
            }}
            placeholder="Your name here"
            className="outline-none text-2xl p-4 border-2 border-stroke/25 bg-transparent rounded-lg"
            type="text"
          />
          <div className="text-white/40 w-full text-right">Enter to start test</div>
        </div>
      </div>
    </>
  );
};

const QuizPage = ({name}) => {
  const [selected, setSelected] = useState(-1);
  const [question, setQuestion] = useState(0);

  return (
    <>
      <section className="w-full h-screen flex flex-col p-4 text-white">
        <div className="flex ">
            <div className="absolute bottom-0 left-0 m-4" >You're doing great {name}, keep going!</div>
          <div className="h-[10vh] flex flex-col">
            <h1 className="text-4xl font-medium">
              Operating Systems Viva 2024
            </h1>
            <h2 className="text-white/50 text-xl mt-1">
              Ram Gopal, Jul 27, 2024
            </h2>
          </div>
          <div className="ml-auto h-full flex items-center justify-center">
            <button className="size-full hover:border-red-950 hover:bg-red-800/20 hover:text-red-600 rounded-lg px-12 border-2 border-stroke/25 flex items-center justify-center gap-2 font-bold">
              Exit
            </button>
          </div>
        </div>
        <div className="flex gap-4  size-full">
          <div className="size-full flex flex-col mt-8 gap-4">
            <div className="text-4xl">
              1. What is the difference between a process and a thread?{" "}
            </div>
            {options.map((i, index) => (
              <Option
                key={i}
                selected={index === selected}
                onClick={() => setSelected(index)}
                index={index}
              >
                {i}
              </Option>
            ))}
            <div className="flex flex-col gap-4"></div>
          </div>
          <div className="w-1/4 shrink-0 grow-0 h-full flex flex-col">
            <h1 className="text-2xl text-white">Questions</h1>

            <div className="h-fit w-full flex relative">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col size-full overflow-hidden">
                  <div className="absolute bottom-0 h-[10vh] w-full bg-gradient-to-b  z-30    from-transparent to-bgBlack pointer-events-none"></div>
                  <div className="h-[60vh]  relative flex pr-2 flex-col gap-2 overflow-y-scroll overflow-x-hidden pb-[12vh]">
                    {questions.map((q, index) => {
                      return (
                        <Question index={index} onClick={() => setQuestion(index)} selected={question==index} key={q}>
                          {q}
                        </Question>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4 size-full flex-col gap-2">
              <div className="h-full w-full flex gap-2">
                <ActionButton>Back</ActionButton>
                <ActionButton>Next</ActionButton>
              </div>
              <ActionButton>Submit</ActionButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ActionButton = ({ children }) => {
  return (
    <button className="w-full h-full p-4 rounded-lg bg-accent/0 border-2 hover:bg-accent hover:text-black border-accent text-white font-bold">
      {children}
    </button>
  );
};

const Question = ({ children, index, selected, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`w-full relative items-center gap-2 flex text-left p-2 text-md  font-medium  ${selected ? "bg-accent text-black " : "bg-cardBg  hover:border-accent hover:text-accent "} border-2 border-transparent rounded-lg`}>
        <div className="h-full p-2">{index + 1}</div>
        <div className="m-2 relative">{children}</div>
        {/* <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-bgBlack/50 to-transparent"></div> */}
      </button>
    </>
  );
};

const Option = ({ children, index, onClick, selected }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-full *:transition-all font-medium border-2 h-16 ${
          selected
            ? "bg-accent text-black"
            : "hover:bg-accent/10 hover:border-accent"
        } overflow-hidden group flex items-center gap-4 border-stroke/25  rounded-xl text-xl text-left relative `}
      >
        <div
          className={`bg-zinc-900/50   h-full aspect-square ${
            selected ? "" : "group-hover:bg-accent/20"
          } overflow-hidden flex items-center justify-center`}
        >
          <div
            className={`  transition-all bg-zinc-900 ${
              selected
                ? "bg-accent/10 size-3/4 rounded-full text-accent"
                : "size-3/4 group-hover:rounded-none  font-bold group-hover:size-full  group-hover:text-accent rounded-[100px]"
            } duration-200 flex items-center justify-center`}
          >
            {String.fromCharCode(97 + index)}
          </div>
        </div>
        <div className=""> {children}</div>
      </button>
    </>
  );
};

export default Quiz;
