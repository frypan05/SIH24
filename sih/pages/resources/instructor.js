import React, { useState, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const InstructorResources = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedTool, setSelectedTool] = useState('pen');
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef();

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
    if (canvasRef.current) {
      canvasRef.current.addText({
        text: textInput,
        x: textPosition.x,
        y: textPosition.y,
        color: 'black' // Set text color to black
      });
    }
    setShowTextInput(false);
    setTextInput('');
  };

  const drawShape = (shapeType) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    if (shapeType === 'rectangle') {
      const rectPath = [
        { draw: 'move', x: 100, y: 100 },
        { draw: 'line', x: 300, y: 100 },
        { draw: 'line', x: 300, y: 200 },
        { draw: 'line', x: 100, y: 200 },
        { draw: 'close' },
      ];
      canvas.loadPaths(rectPath);
    } else if (shapeType === 'circle') {
      const circlePath = [
        { draw: 'move', x: 200, y: 150 },
        { draw: 'arc', x: 200, y: 150, radius: 50, startAngle: 0, endAngle: 2 * Math.PI },
      ];
      canvas.loadPaths(circlePath);
    }
  };

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    if (tool === 'rectangle' || tool === 'circle') {
      drawShape(tool);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Whiteboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border rounded-md py-1 px-2 text-sm">
              <option>Untitled whiteboard</option>
            </select>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Share</button>
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
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ReactSketchCanvas
            ref={canvasRef}
            className="w-full"
            style={{ height: 'calc(100vh - 180px)' }}
            strokeWidth={4}
            strokeColor={selectedColor}
            backgroundImage=""
            eraserWidth={5}
            canvasColor="white"
          />
        </div>
      </main>

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

      <footer className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full ${color === 'white' ? 'border border-gray-300' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            {tools.map((tool) => (
              <button
                key={tool}
                className={`p-2 rounded-md ${selectedTool === tool ? 'bg-gray-200' : ''}`}
                onClick={() => handleToolSelect(tool)}
              >
                {tool === 'text' && <span className="w-5 h-5 block bg-gray-400 rounded-sm">T</span>}
                {tool === 'rectangle' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" /></svg>}
                {tool === 'circle' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" /></svg>}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <span className="text-sm">100%</span>
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InstructorResources;