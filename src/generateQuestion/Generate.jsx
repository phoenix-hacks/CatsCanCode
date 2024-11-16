import "./generate.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function Generate() {
  const [isFetching, setFetching] = useState(false);
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
  const navigate = useNavigate();
  const handlegenerate = () => {
    // console.log(params);
    setFetching(true);
    const gettingequetion = async () => {
      const p = await axios.post("http://localhost:3000/generate/withoutPdf", {
        subject: params.subject,
        topic: params.topic,
        grade: params.grade,
        questionLevels: [params.easy, params.medium, params.hard]
      })
      if (p?.data) {
        setFetching(false);
        localStorage.setItem("myData", p.data);
        // console.log(p.data.res);
        navigate("/generatedPaper", { state: JSON.stringify(p.data.res) });
      }
    }
    gettingequetion();
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
              className="cursor-pointer size-full"
              id="dropzone"
            >
              <input {...getInputProps()} />
              {file ? (
                <p>{file.name}</p>
              ) : (
                <div className="flex flex-col">
                  Drag & drop a PDF
                  <span className="text-white/20">or click to select</span>
                </div>
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

          <div id="difficulty-meter">
            <div id="q-diff">
              <input
                type="number"
                placeholder="0"            //QUESTIONS NUMBER - EASY
                id="input-area-short"
                onChange={(e) => setParams({ ...params, easy: e.target.value })}
              />
              <span className="w-full text-white/40">Easy</span>
            </div>
            <div id="q-diff">
              <input
                type="number"
                placeholder="0"            //QUESTIONS NUMBER - MEDIUM
                id="input-area-short"
                onChange={(e) => setParams({ ...params, medium: e.target.value })}
              />
              <span className="w-full text-white/40">Medium</span>
            </div>
            <div id="q-diff">
              <input
                type="number"
                placeholder="0"            //QUESTIONS NUMBER - HARD
                id="input-area-short"
                onChange={(e) => setParams({ ...params, hard: e.target.value })}
              />
              <span className="w-full text-white/40">Hard</span>
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
          onClick={() => handlegenerate()}
        >
          {isFetching ? "Generating..." : "Generate"}
        </motion.div>
      </div>
    </>
  );
}
