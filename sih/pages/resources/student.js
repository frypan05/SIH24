import React from 'react';

const DeveloperRoadmaps = () => {
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

  return (
    <div className="bg-[#0D1117] text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#1A1E24] text-[#BD93F9] text-sm px-4 py-2 rounded-full mb-4">
            Teri esi ki tesi
          </div>
          <h1 className="text-5xl font-bold text-[#BD93F9] mb-4">Handcrafted Developer Roadmaps</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This is an effort to create roadmaps, guides and other educational content to help
            guide developers in picking up a path and guide their learnings.
          </p>
        </div>

        <h2 className="text-xl text-gray-300 mb-4">Role based Roadmaps</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {roadmaps.map((roadmap, index) => (
            <div key={index} className="bg-[#1A1E24] p-4 rounded-lg flex justify-between items-center">
              <span>{roadmap}</span>
              <span className="text-gray-500">➔</span>
              {(roadmap === 'iOS' || roadmap === 'Developer Relations' || roadmap === 'Product Manager') && (
                <span className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full ml-2">New</span>
              )}
            </div>
          ))}
          <div className="bg-[#1A1E24] p-4 rounded-lg flex justify-between items-center text-purple-400">
            + Create your own Roadmap
          </div>
        </div>

        <h2 className="text-xl text-gray-300 mb-4">Skill based Roadmaps</h2>
        {/* Add skill based roadmaps here if needed */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {skillmaps.map((roadmap, index) => (
            <div key={index} className="bg-[#1A1E24] p-4 rounded-lg flex justify-between items-center">
              <span>{roadmap}</span>
              <span className="text-gray-500">➔</span>
              {(roadmap === 'iOS' || roadmap === 'Developer Relations' || roadmap === 'Product Manager') && (
                <span className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full ml-2">New</span>
              )}
            </div>
          ))}
          <div className="bg-[#1A1E24] p-4 rounded-lg flex justify-between items-center text-purple-400">
            + Create your own Roadmap
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperRoadmaps;