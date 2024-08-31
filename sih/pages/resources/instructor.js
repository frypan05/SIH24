import React, { useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Document, Page, pdfjs } from 'react-pdf';
import XLSX from 'xlsx';
import mammoth from 'mammoth';
import { useRouter } from 'next/router'; // Import useRouter

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const InstructorResources = () => {
  const router = useRouter(); // Initialize useRouter
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedTool, setSelectedTool] = useState('pen');
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [link, setLink] = useState('');

  const colors = ['black', 'red', 'blue', 'yellow', 'pink', 'gray', 'white'];
  const tools = ['pen', 'eraser', 'rectangle', 'circle', 'text'];

  const handleCanvasClick = (e) => {
    if (selectedTool === 'text') {
      const canvasBounds = e.target.getBoundingClientRect();
      const x = e.clientX - canvasBounds.left;
      const y = e.clientY - canvasBounds.top;
      setTextPosition({ x, y });
      setShowTextInput(true);
    }
  };

  const addTextToCanvas = () => {
    if (textInput.trim() === '') return;
    setShowTextInput(false);
    setTextInput('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      if (file.type.includes('pdf')) {
        setUploadedFiles([...uploadedFiles, { type: 'pdf', content }]);
      } else if (file.type.includes('sheet') || file.type.includes('excel')) {
        const workbook = XLSX.read(content, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setUploadedFiles([...uploadedFiles, { type: 'excel', content: data }]);
      } else if (file.type.includes('word')) {
        mammoth.convertToHtml({ arrayBuffer: content })
          .then(result => {
            setUploadedFiles([...uploadedFiles, { type: 'word', content: result.value }]);
          });
      } else if (file.type.includes('image')) {
        // Handle image file types like PNG, JPG, etc.
        setUploadedFiles([...uploadedFiles, { type: 'image', content: event.target.result }]);
      }
    };

    if (file.type.includes('pdf') || file.type.includes('word')) {
      reader.readAsArrayBuffer(file); // Read as ArrayBuffer for PDFs and Word files
    } else if (file.type.includes('image')) {
      reader.readAsDataURL(file); // Read as Data URL for images
    } else {
      reader.readAsBinaryString(file); // Read as binary string for Excel
    }
  };

  const handleLinkUpload = () => {
    if (link.trim() !== '') {
      setUploadedFiles([...uploadedFiles, { type: 'link', content: link }]);
      setLink('');
    }
  };

  const handleShare = () => {
    alert('Share functionality goes here. Implement the sharing logic.');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => router.push('/')}
              className="mr-4 bg-black text-white px-4 py-2 rounded-md flex items-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7M21 12H3" />
              </svg>
              <span className="ml-2">Back</span>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Whiteboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border rounded-md py-1 px-2 text-sm">
              <option>Untitled whiteboard</option>
            </select>
            <button className="text-blue-600 hover:text-blue-800 text-sm" onClick={handleShare}>Publish</button>
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4" onClick={handleCanvasClick}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <ReactSketchCanvas
            className="w-full"
            style={{ height: 'calc(100vh - 260px)' }}
            strokeWidth={4}
            strokeColor={selectedColor}
            backgroundImage=""
            eraserWidth={5}
            canvasColor="white"
          />
          {showTextInput && (
            <div style={{ position: 'absolute', top: textPosition.y, left: textPosition.x }}>
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onBlur={addTextToCanvas}
                autoFocus
                style={{ color: 'black' }} // Set input text color to black
              />
            </div>
          )}
        </div>

        {/* File Upload Section */}
        <div className="mt-4 bg-gray-200 rounded-lg shadow-md p-4">
          <input type="file" onChange={handleFileUpload} />
          <input 
            type="text" 
            placeholder="Enter a link" 
            value={link} 
            onChange={(e) => setLink(e.target.value)} 
            className="mt-2 p-2 border rounded-md w-full"
            style={{ color: 'black' }}
          />
          <button onClick={handleLinkUpload} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Add Link</button>
          
          {uploadedFiles.map((file, index) => (
            <div key={index} className="mt-4 p-4 bg-white border border-gray-300 rounded-md shadow-sm text-black">
              {file.type === 'pdf' && (
                <Document 
                  file={{ data: new Uint8Array(file.content) }}
                  onLoadError={(error) => console.error("PDF load error:", error)} // Error handling
                  className="pdf-container"
                >
                  <Page pageNumber={1} />
                </Document>
              )}
              {file.type === 'excel' && (
                <table className="min-w-full divide-y divide-gray-200 text-black">
                  <tbody>
                    {file.content.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-black">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {file.type === 'word' && (
                <div className="word-content text-black" dangerouslySetInnerHTML={{ __html: file.content }} />
              )}
              {file.type === 'image' && (
                <img src={file.content} alt="Uploaded" className="max-w-full h-auto" />
              )}
              {file.type === 'link' && (
                <a href={file.content} className="text-blue-500 hover:text-blue-800 text-black">{file.content}</a> 
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InstructorResources;