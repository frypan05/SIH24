// components/FrontendRoadmap.js
import React from 'react';

const promptengineerRoadmap = () => {
  return (
    <div className="bg-[#081D22] text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#01151A] text-[#BD93F9] text-sm px-4 py-2 rounded-full mb-4">
            {/* Link to the landing page */}
            <a href="/" className="text-[#BD93F9] hover:underline">Back to Home Page</a>
          </div>
          <h1 className="text-5xl font-bold text-[#8AD4D0] mb-4">Prompt Engineer Roadmap</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This page provides a roadmap for Prompt Engineer development, including key technologies, tools, and skills.
          </p>
        </div>
        {/* Add more content specific to Frontend roadmap here */}
      </div>
    </div>
  );
};

export default promptengineerRoadmap;
