// DeveloperRoadmaps.js
import React from 'react';
import { useRouter } from 'next/router';

const DeveloperRoadmaps = () => {
  const router = useRouter();

  const roadmaps = [
    'Frontend', 'Backend', 'DevOps',
    'Full Stack', 'AI and Data Scientist', 'Data Analyst',
    'Android', 'iOS', 'PostgreSQL',
    'Blockchain', 'QA', 'Software Architect',
    'Cyber Security', 'UX Design', 'Game Developer',
    'Technical Writer', 'MLOps', 'Product Manager',
    'Developer Relations'
  ];
  const skillmaps = [
    'React.js', 'Docker', 'Prompt Engineer', 'System Design'
  ];

  // Click handler for roadmap buttons
  const handleRoadmapClick = (roadmap) => {
    if (roadmap === 'Frontend') {
      router.push('/frontend');
    } else {
      // Add redirect logic for other roadmaps
      console.log(`Clicked on roadmap: ${roadmap}`);
      // window.location.href = `/roadmap/${roadmap.toLowerCase().replace(/\s/g, '-')}`; // Example redirect
    }
    if (roadmap === 'Backend') {
      router.push('/backend');
    } else {
      // Add redirect logic for other roadmaps
      console.log(`Clicked on roadmap: ${roadmap}`);
      // window.location.href = `/roadmap/${roadmap.toLowerCase().replace(/\s/g, '-')}`; // Example redirect
    }
    if (roadmap === 'DevOps') {
      router.push('/devops');
    } else {
      // Add redirect logic for other roadmaps
      console.log(`Clicked on roadmap: ${roadmap}`);
      // window.location.href = `/roadmap/${roadmap.toLowerCase().replace(/\s/g, '-')}`; // Example redirect
    }
    if (roadmap === 'Full Stack') {
      router.push('/fullstack');
    } else {
      // Add redirect logic for other roadmaps
      console.log(`Clicked on roadmap: ${roadmap}`);
      // window.location.href = `/roadmap/${roadmap.toLowerCase().replace(/\s/g, '-')}`; // Example redirect
    }
  };

  return (
    <div className="bg-[#081D22] text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#01151A] text-[#BD93F9] text-sm px-4 py-2 rounded-full mb-4">
            {/* Link to the landing page */}
            <a href="/" className="text-[#BD93F9] hover:underline">Back to Home Page</a>
          </div>
          <h1 className="text-5xl font-bold text-[#8AD4D0] mb-4">Handcrafted Developer Roadmaps</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This is an effort to create roadmaps, guides and other educational content to help
            guide developers in picking up a path and guide their learnings.
          </p>
        </div>

        <h2 className="text-xl text-gray-300 mb-4">Role based Roadmaps</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {roadmaps.map((roadmap, index) => (
            <div
              key={index}
              className="bg-[#01151A] p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-[#07514C] hover:text-white transition-all duration-300"
              onClick={() => handleRoadmapClick(roadmap)}
            >
              <span>{roadmap}</span>
              <span className="text-gray-500">➔</span>
              {(roadmap === 'iOS' || roadmap === 'Developer Relations' || roadmap === 'Product Manager') && (
                <span className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full ml-2">New</span>
              )}
            </div>
          ))}
          <div
            className="bg-[#01151A] p-4 rounded-lg flex justify-between items-center text-[#9E00FF] cursor-pointer hover:bg-[#07514C] hover:text-white transition-all duration-300"
            onClick={() => handleRoadmapClick('Create your own Roadmap')}
          >
            + Create your own Roadmap
          </div>
        </div>

        <h2 className="text-xl text-gray-300 mb-4">Skill based Roadmaps</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {skillmaps.map((roadmap, index) => (
            <div
              key={index}
              className="bg-[#01151A] p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-[#07514C] hover:text-white transition-all duration-300"
              onClick={() => handleRoadmapClick(roadmap)}
            >
              <span>{roadmap}</span>
              <span className="text-gray-500">➔</span>
              {(roadmap === 'iOS' || roadmap === 'Developer Relations' || roadmap === 'Product Manager') && (
                <span className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full ml-2">New</span>
              )}
            </div>
          ))}
          <div
            className="bg-[#01151A] p-4 rounded-lg flex justify-between items-center text-[#9E00FF] cursor-pointer hover:bg-[#07514C] hover:text-white transition-all duration-300"
            onClick={() => handleRoadmapClick('Create your own Roadmap')}
          >
            + Create your own Roadmap
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperRoadmaps;
