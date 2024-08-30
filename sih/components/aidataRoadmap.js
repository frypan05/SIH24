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
          <h1 className="text-5xl font-bold text-[#66FCF1] mb-4">Frontend Roadmap</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This page provides a roadmap for Frontend development, including key technologies, tools, and skills.
          </p>
        </div>

        {/* Main Roadmap Section */}
        <div className="bg-[#1F2833] rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl text-[#66FCF1] mb-4">Frontend Developer Roadmap</h2>
          <p className="text-gray-400 mb-4">Step-by-step guide to becoming a modern frontend developer in 2024</p>

          {/* Progress Bar */}
          <div className="bg-[#4B5D67] w-full max-w-lg h-6 rounded-full mb-4 relative">
            <div className="bg-[#45A29E] h-full rounded-full " style={{ width: '90%' }}></div>
            <span className="absolute left-2 text-sm text-gray-300">90% DONE</span>
            <span className="absolute right-2 text-sm text-gray-300">98 of 115 Done</span>
          </div>

         {/* Roadmap Nodes */}
<div className="flex flex-wrap justify-center gap-6 mt-8">
  {/* Front-end Section */}
  <div className="flex flex-col items-center">
    <h3 className="text-xl text-[#66FCF1] mb-2">Front-end</h3>
    <ul className="space-y-5">
      {/* Internet Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Internet</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>How does the internet work?</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>What is HTTP?</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>What is Domain Name?</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>What is hosting?</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>DNS and how it works?</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Browsers and how they work?</a>
        </li>
      </ul>

      {/* HTML Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>HTML</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Learn the basics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Writing Semantic HTML</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Forms and Validations</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Accessibility</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>SEO Basics</a>
        </li>
      </ul>

      {/* CSS Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>CSS</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Learn the basics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Making Layouts</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Responsive Design</a>
        </li>
      </ul>

      {/* JavaScript Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>JavaScript</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Learn the Basics</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Data Types, Values, and Variables</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Functions and Scopes</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>ES6+ and Modern JavaScript Features</a>
        </li>
      </ul>

      {/* Tools and Technologies Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Tools & Technologies</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Git & GitHub</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>npm & Yarn</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Webpack</a>
        </li>
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Babel</a>
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
