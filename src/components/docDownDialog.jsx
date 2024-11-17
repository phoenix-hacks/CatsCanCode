import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@radix-ui/react-dialog";
import { Upload, FileUp, Download } from "lucide-react";

const DocumentDialog = ({ questions }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Please select a valid .docx file');
    }
  };

  const handleDownload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('template', selectedFile);
      formData.append('questions', JSON.stringify(questions));

      const response = await fetch('http:///generate-document', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate document');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'generated_document.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message || 'Failed to generate document');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="gap-2">
          <Upload size={16} />
          Upload Template
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <h2>
          <DialogTitle>Upload Document Template</DialogTitle>
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="template">Template File</label>
            <div className="flex items-center gap-2">
              <input
                id="template"
                type="file"
                accept=".docx"
                onChange={handleFileChange}
                className="flex-1"
              />
              <button
                onClick={handleDownload}
                disabled={!selectedFile || isLoading}
                className="gap-2"
              >
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Download size={16} />
                )}
                Download
              </button>
            </div>
          </div>
          
          {error && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}
          
          {selectedFile && (
            <div className="text-sm text-green-500 flex items-center gap-2">
              <FileUp size={16} />
              {selectedFile.name}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentDialog;