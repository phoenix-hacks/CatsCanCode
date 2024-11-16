import "./generate.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Generate() {
  const [params, setParams] = useState({
    subject: null,
    topic: null,
    grade: null,
    mcq: 0,
    short: 0,
    long: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    formData: null,
  });
  
  const handlegenerate=()=>{
    console.log(params);
  }

  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      console.log("Uploading file...");
      const formData = new FormData();
      formData.append("file", selectedFile);
      setParams((prev) => ({ ...prev, formData }));

      console.log("File upload complete!");
      
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"], // Correct MIME type and extension
    },
  });



  return (
    <>
      <div id="generate-container">
        <motion.div
          id="generate-title"
          initial={{ opacity: 0, y: -20 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          animate={{ opacity: 1, y: 0 }}
        >
          Generate
        </motion.div>


        <motion.div
          id="generate-params"
          initial={{ opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
            delay: 0.3,
            ease: "easeInOut",
          }}
          animate={{ opacity: 1 }}
        >
            <div id="study-material">




            <div
              {...getRootProps()}
              id="dropzone"
            >
              <input {...getInputProps()} />
              {file ? (
                <p>{file.name}</p>
              ) : (
                <p>Drag & drop a PDF file here, or click to select one.</p>
              )}
            </div>




            </div>
          <input
            type="text" 
            placeholder="Enter Subject"    //SUBJECT
            id="input-area"
            onChange={(e) => setParams({ ...params, subject: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Topic"  //TOPIC
            id="input-area"
            onChange={(e) => setParams({ ...params, topic: e.target.value })}
          />
          <input
            type="text" 
            placeholder="Enter Grade"   //GRADE
            id="input-area"
            onChange={(e) => setParams({ ...params, grade: e.target.value })}
          />


          <div id="question-format">    
            <div id="q-number">
            <input
              type="number"
              placeholder="0"            //QUESTIONS FORMAT - MCQ
              id="input-area-short"
              onChange={(e) => setParams({ ...params, mcq: e.target.value })}
            />
            <span>Mcq</span>
            </div>
            <div id="q-number">
            <input
              type="number"
              placeholder="0"            //QUESTIONS FORMAT - SHORT
              id="input-area-short"
              onChange={(e) => setParams({ ...params, short: e.target.value })}
            />
            <span>Short</span>
            </div>
            <div id="q-number">
            <input
              type="number"
              placeholder="0"            //QUESTIONS FORMAT - LONG
              id="input-area-short"
              onChange={(e) => setParams({ ...params, long: e.target.value })}
            />
            <span>Long</span>
            </div>
          </div>



          <div id="difficulty-meter">
          <div id="q-diff">
            <input
              type="number"
              placeholder="0"            //QUESTIONS NUMBER - EASY
              id="input-area-short"
              onChange={(e) => setParams({ ...params, easy: e.target.value })}
            />
            <span>Easy</span>
            </div>
            <div id="q-diff">
            <input
              type="number"
              placeholder="0"            //QUESTIONS NUMBER - MEDIUM
              id="input-area-short"
              onChange={(e) => setParams({ ...params, medium: e.target.value })}
            />
            <span>Medium</span>
            </div>
            <div id="q-diff">
            <input
              type="number"
              placeholder="0"            //QUESTIONS NUMBER - HARD
              id="input-area-short"
              onChange={(e) => setParams({ ...params, hard: e.target.value })}
            />
            <span>Hard</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          id="generate-submit"
          initial={{ scale: 0.1, opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
            delay: 0.6,
            ease: "easeInOut",
          }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={()=>handlegenerate()}
        >
          Generate
        </motion.div>
      </div>
    </>
  );
}
