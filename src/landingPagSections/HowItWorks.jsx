import React from "react";
import { useEffect } from "react";
import "./nihal.scss";
export default function HowItWorks() {
  return (
    <div id="howitworks-container">
      {/* <div id="howitworks-title">How it Works</div> */}
      <div
        id="howitworks-flow"
        className=" bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white "
      >
        <div id="step1">Choose topic</div>
        <div id="line1"></div>
        <div id="step2">Define question difficulty</div>
        <div id="line2"></div>
        <div id="step3">Add Template</div>
        <div id="line3"></div>
        <div id="step4">Download DOCX</div>
      </div>
    </div>
  );
}
