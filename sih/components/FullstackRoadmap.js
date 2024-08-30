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
          <h1 className="text-5xl font-bold text-[#66FCF1] mb-4">Fullstack Roadmap</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This page provides a roadmap for Fullstack development, including key technologies, tools, and skills.
          </p>
        </div>

        {/* Main Roadmap Section */}
        <div className="bg-[#1F2833] rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl text-[#66FCF1] mb-4">Fullstack Developer Roadmap</h2>
          <p className="text-gray-400 mb-4">Step-by-step guide to becoming a modern Fullstack developer in 2024</p>

          {/* Progress Bar */}
          <div className="bg-[#4B5D67] w-full max-w-lg h-6 rounded-full mb-4 relative">
            <div className="bg-[#45A29E] h-full rounded-full " style={{ width: '2%' }}></div>
            <span className="absolute left-2 text-sm text-gray-300">2% DONE</span>
            <span className="absolute right-2 text-sm text-gray-300">10 of 115 Done</span>
          </div>
         {/* Roadmap Nodes */}
<div className="flex flex-wrap justify-center gap-6 mt-8">
  {/* Front-end Section */}
  <div className="flex flex-col items-center">
    <h3 className="text-xl text-[#66FCF1] mb-2">Full Stack</h3>
    <ul className="space-y-5">
      {/* Internet Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>HTML</a>
      </li>
      <ul className="ml-4 space-y-2">
      </ul>

      {/* HTML Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>CSS</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Static webpages</a>
        </li>
      </ul>

      {/* CSS Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Java Script</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Interactivity</a>
        </li>
      </ul>

      {/* JavaScript Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>npm</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-External Packages</a>
        </li>
      </ul>

      {/* Tools and Technologies Section */}
      <li className="bg-[#0B0C10] p-3 flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Git</a>
      </li>
      <ul className="ml-4 space-y-2">

      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Collaborative Work</a>
        </li>
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Tailwind CSS</a>
      </li>
      <ul className="ml-4 space-y-2">
        
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>React</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Frontend Apps</a>
        </li>
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>START BACKEND DEVELOPMENT</a>
      </li>
      <ul className="ml-4 space-y-2">
      
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Node.js</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-CLI A</a>
        </li>
       
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>PostgreSQL</a>
      </li>
      <ul className="ml-4 space-y-2">

      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>RESTful APIs</a>
      </li>
      <ul className="ml-4 space-y-2">
        
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>JWT Auth</a>
      </li>
      <ul className="ml-4 space-y-2">
  
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Redjs</a>
      </li>
      <ul className="ml-4 space-y-2">
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Linux Basics</a>
      </li>
      <ul className="ml-4 space-y-2">
        
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Basic AWS Services</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Deployment</a>
        </li>
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Monit</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Monitoring</a>
        </li>
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Github Action</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-CI/CD</a>
        </li>
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Ansible</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Automation</a>
        </li>
      
      </ul>
       {/* JavaScript Section */}
       <li className="bg-[#0B0C10] p-3 flex flex-col items-center flex flex-col items-center rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
        <a href="#" onClick={(e) => e.preventDefault()}>Terraform</a>
      </li>
      <ul className="ml-4 space-y-2">
        <li className="bg-[#0B0C10] p-3 rounded-lg text-[#66FCF1] hover:bg-[#45A29E] transition duration-300 cursor-pointer">
          <a href="#" onClick={(e) => e.preventDefault()}>Checkpoint-Infrastructure</a>
        </li>
      </ul>
       
    </ul>
  </div>
</div>
  {/* Additional Content */}
  <div className="mt-6">
            <p className="text-gray-400">
              This is a brief version of the Fullstack roadmap. For the complete guide and more in-depth details, visit <a href="https://roadmap.sh/full-stack" className="text-[#66FCF1] hover:underline">Click Here</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FrontendRoadmap;
