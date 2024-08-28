import React from "react";

const Progress = () => {
  return (
    <div className="min-h-screen bg-[#1f3a52] flex flex-col items-center">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-4 bg-[#1f3a52]">
        <h1 className="text-white text-2xl">Pomofocus</h1>
        <div className="flex gap-4">
          <button className="bg-[#f9e5e5] text-[#1f3a52] px-4 py-2 rounded">Report</button>
          <button className="bg-[#f9e5e5] text-[#1f3a52] px-4 py-2 rounded">Settings</button>
        </div>
      </header>

      {/* Content */}
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/3 mt-10 rounded-lg shadow-lg p-6">
        {/* Tabs */}
        <div className="flex justify-around mb-4 border-b">
          <button className="text-[#e4a8a8] font-bold border-b-4 border-[#e4a8a8]">Summary</button>
          <button className="text-[#e4a8a8]">Detail</button>
          <button className="text-[#e4a8a8]">Ranking</button>
        </div>
        
        {/* Activity Summary */}
        <h2 className="text-lg font-bold mb-4">Activity Summary</h2>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center bg-[#f9e5e5] p-4 rounded-lg">
            <p className="text-3xl font-bold">76.9</p>
            <p className="text-sm">hours focused</p>
          </div>
          <div className="flex flex-col items-center bg-[#f9e5e5] p-4 rounded-lg">
            <p className="text-3xl font-bold">40</p>
            <p className="text-sm">days accessed</p>
          </div>
          <div className="flex flex-col items-center bg-[#f9e5e5] p-4 rounded-lg">
            <p className="text-3xl font-bold">1</p>
            <p className="text-sm">day streak</p>
          </div>
        </div>

        {/* Focus Hours */}
        <h2 className="text-lg font-bold mb-4">Focus Hours</h2>
        <div className="flex items-center justify-between mb-4">
          <button className="px-4 py-2 border-2 border-[#e4a8a8] text-[#e4a8a8] rounded-full">Week</button>
          <button className="px-4 py-2 text-[#e4a8a8]">Month</button>
          <button className="px-4 py-2 text-[#e4a8a8]">Year</button>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-[#f9e5e5] h-40 rounded-lg flex justify-center items-center">
          <p className="text-gray-400">No Project</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
