import React from "react";
import "./nihal.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [trigger, setTrigger] = useState(false);
  const [curr, setCurr] = useState(0);
  const close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const questions = [
    "What is Forge.in, and who is it for?",
    "Can I customize the questions generated by Forge.in?",
    "How does the quiz sharing feature work?",
    "What formats can I export the question papers in?",
    "Is Forge.in secure for managing sensitive exam content?",
  ];
  const answers = [
    "Forge.in is an AI-powered tool designed for educators and institutions to create question papers and quizzes quickly and efficiently.",
    "Yes, you can tailor questions by subject, topic, difficulty level, and format to suit your specific needs.",
    "Forge.in generates a unique link for your quiz that you can share. Anyone with the link can access and complete the quiz.",
    "You can export question papers in PDF or Word formats, or directly share quizzes online via a link.",
    "Absolutely. Forge.in prioritizes data security, ensuring your content is stored and shared safely.",
  ];
  return (
    <div id="faq-container">
      {/* <div id="faq-title">FAQs</div>
      <div
        id="faq-subtitle"
        className=" bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white "
      >
        We've got the answers.
      </div> */}
      <div
        id="faq-questions"
        style={{
          opacity: trigger ? 0.2 : 1,
          transition: "backdrop-filter 0.3s ease",
        }}
      >
        {questions.map((q, ind) => {
          return (
            <motion.div
              id="each-question"
              onClick={() => {
                setTrigger(!trigger);
                setCurr(ind);
              }}
              initial={{ opacity: 0 }}
              transition={{ type: "tween", delay: 1 + 0.5 * ind }}
              animate={{ opacity: 1 }}
            >
              <span>{q}</span>
              <span id="more-icon">+</span>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {trigger && (
          <motion.div
            id="drawer"
            initial={{ translateY: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "100%" }}
          >
            <span id="question-drawer">{questions[curr]}</span>
            <span id="answers-curr">{answers[curr]}</span>
            <span id="close" onClick={() => setTrigger(false)}>
              {close}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
