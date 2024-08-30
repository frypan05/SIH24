import React from 'react';

const FrontendRoadmap = () => {
  return (
    <div className="bg-[#0B0C10] text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* <div className="inline-block bg-[#1F2833] text-[#66FCF1] text-sm px-4 py-2 rounded-full mb-4 hover:bg-[#45A29E] transition duration-300">
            <a href="/" className="text-[#66FCF1] hover:underline">Back to Home Page</a>
          </div> */}
          <h1 className="text-5xl font-bold text-[#66FCF1] mb-4">Data Analyst Roadmap</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This page provides a roadmap for Data Analyst development, including key technologies, tools, and skills.
          </p>
        </div>

        {/* Main Roadmap Section */}
        <div className="bg-[#1F2833] rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl text-[#66FCF1] mb-4">Data Analyst Developer Roadmap</h2>
          <p className="text-gray-400 mb-4">Step-by-step guide to becoming a modern Data Analyst developer in 2024</p>

          {/* Progress Bar */}
          <div className="bg-[#4B5D67] w-full max-w-lg h-6 rounded-full mb-4 relative">
            <div className="bg-[#45A29E] h-full rounded-full " style={{ width: '50%' }}></div>
            <span className="absolute left-2 text-sm text-gray-300">50% DONE</span>
            <span className="absolute right-2 text-sm text-gray-300">50 of 115 Done</span>
          </div>

         {/* Roadmap Nodes */}
<div className="flex flex-wrap justify-center gap-6 mt-8">
  {/* Front-end Section */}
  <div className="flex flex-col items-center">
    <h3 className="text-xl text-[#66FCF1] mb-2">Front-end</h3>
    <ul className="space-y-5">
      {/* Internet Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Types of Data Analyst</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Descriptive Analytics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Diagnostic Analytics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Predictive Analytics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Prespective Analytics</a>
       
        </li>
      </ul>

      {/* HTML Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Analaysis/Reporting with Excel</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>IF</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>DATEDIF</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>VLOOKUP/HLOOKUP</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>UPPER/LOWER/PROPER</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>CONCAT</a>
        </li>
      </ul>

      {/* CSS Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Data Collection</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Databases</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>CSV Files</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>APIs</a>
        </li>
      </ul>

      {/* JavaScript Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Data cleanup</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Handling missing data</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Removing Duplicates</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Finding outliers</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Data transformation</a>
        </li>
      </ul>

      {/* Tools and Technologies Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Descriptive Analaysis</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Generating  Statistics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Visualizing Distributions</a>
      
        </li>
      </ul>
    </ul>
  </div>
</div>
  {/* Additional Content */}
  <div className="mt-6">
            <p className="text-gray-400">
              This is a brief version of the frontend roadmap. For the complete guide and more in-depth details, visit <a href="https://roadmap.sh/frontend" className="text-[#66FCF1] hover:underline">Click Here</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FrontendRoadmap;
