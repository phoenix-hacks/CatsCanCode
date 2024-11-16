import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../components/navbar";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Faq from "./Faq";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function landingPage() {
  const [current, setCurrent] = useState(1);
  const handlecurr=(ind)=>{
    setCurrent(ind);
  }
  return (
    <>
      
      <Navbar changecurr={handlecurr} />
      <AnimatePresence>
        {current == 1 && (
          <motion.div
            transition={{ type: "tween", duration: 0.28 }}
            exit={{ opacity: 0 }}
          >
              <HeroSection />
          </motion.div>
        )}
    </AnimatePresence>
        <AnimatePresence>
        {current == 2 && (
          <motion.div
            transition={{ type: "tween", duration: 0.28 }}
            exit={{ opacity: 0 }}
          >
              <Features />
          </motion.div>
        )}
        </AnimatePresence>
        <AnimatePresence>
        {current == 3 && (
          <motion.div
            transition={{ type: "tween", duration: 0.28 }}
            exit={{ opacity: 0 }}
          >
              <HowItWorks />
          </motion.div>
        )}
        </AnimatePresence>
        <AnimatePresence>
        {current ==4 && (
          <motion.div
            transition={{ type: "tween", duration: 0.28 }}
            exit={{ opacity: 0 }}
          >
              <Faq />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Features />
      <HowItWorks />
      <Faq /> */}
    </>
  );
}
