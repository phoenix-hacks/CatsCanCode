import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mcq from "../components/mcq";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export default function GeneratedPaper() {
  const [andha, setAndha] = useState("");
  const params = useParams();
  const location = useLocation();
  const data = JSON.parse(location.state);
  const questions = data.questions;
  const [showAnswer, setShowAnswer] = useState(false);
  const [error, setError] = useState("");

  console.log(questions);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (
      selectedFile.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      setFile(selectedFile);
      //   const formData = new FormData();
      //   formData.append("file", selectedFile);
      //   setParams((prev) => ({ ...prev, formData }));

      console.log("File upload complete!");
    } else {
      alert("Please upload a valid DOCX file.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"], // Correct MIME type and extension
    },
  });

  const handleDownload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("template", file);
      formData.append("questions", JSON.stringify(questions));

      const response = await fetch("http://localhost:5000/generate-document", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate document");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "generated_document.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message || "Failed to generate document");
    } finally {
      setIsloading(false);
    }
  };

  // console.log(questions);
  return (
    
    <div className="h-screen overflow-scroll">
      <div className="flex flex-col justify-center items-center">
        <p className="text-lightWhite text-2xl mt-16">Generate</p>
        <p className="text-accent my-8 text-[3rem] font-medium">
          Question Paper
        </p>
      </div>
      <div className="flex flex-col rounded-2xl mx-32 p-8 bg-blackishGray border-stroke/25 border-[0.1rem] justify-start ">
        <div className="flex flex-row w-full justify-between align-middle">
          <div className="text-lightWhite font-semibold text-2xl">
            {data.subject}
          </div>

          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row gap-6 ">
              {showAnswer ? (
                <button
                  onMouseEnter={() => setAndha("Hide Answers")}
                  onMouseLeave={() => setAndha("")}
                  onClick={() => {
                    setShowAnswer(!showAnswer);
                  }}
                  className="relative flex items-center justify-center group"
                >
                  <img src="/openeye.svg" alt="copy" className="w-8 h-8" />
                  <div className="absolute top-full mt-2 pointer-events-none text-white whitespace-nowrap group-hover:opacity-100 opacity-0 transition-all duration-200">
                    Hide answers
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAnswer(!showAnswer);
                  }}
                  className="relative flex items-center justify-center group"
                >
                  <img src="/eye.svg" alt="copy" className="w-8 h-8" />
                  <div className="absolute top-full mt-2 text-white pointer-events-none whitespace-nowrap group-hover:opacity-100 opacity-0 transition-all duration-200">
                    Show answers
                  </div>
                </button>
              )}
              {/* <Link to=''>
              <img
                src='/copy.svg'
                alt='copy'
                className='w-8 h-8'
              />
            </Link> */}
              <button
                onClick={() => window.open(`/quiz/${params.id}`, "_blank")}
                className="relative flex items-center justify-center group"
              >
                <img src="/quiz.svg" alt="copy" className="w-8 h-8" />
                <div className="absolute top-full mt-2 text-white pointer-events-none whitespace-nowrap group-hover:opacity-100 opacity-0 transition-all duration-200">
                  Create quiz link
                </div>
              </button>

              {/* <button onClick={() => {}}>
              <img
                src='/file.svg'
                alt='copy'
                className='w-8 h-8'
              />
            </button> */}
            </div>
            {/* <div className="text-white ">{andha}</div> */}
          </div>
        </div>

        <div className="text-lightWhite font-semibold text-xl text-left mt-2">
          {data.topic}
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

      <div id="study-material">
        <div
          {...getRootProps()}
          className="cursor-pointer size-full"
          id="dropzone"
        >
          <input {...getInputProps()} />
          {file ? (
            <p className="text-white flex flex-col justify-center items-center mt-6">
              {file.name}
            </p>
          ) : (
            <div className="flex flex-col justify-center items-center">
              Drag & drop a PDF
              <span className="text-white/20">
                {file ? "uploaded" : "Drag and Drop Template"}
              </span>
            </div>
          )}
        </div>
      </div>
      <button
        className="bg-accent text-black font-medium rounded-lg p-2 mt-4 flex m-auto "
        onClick={() => {
          handleDownload();
        }}
      >
        Generate Document
      </button>
    </div>
  );
}
