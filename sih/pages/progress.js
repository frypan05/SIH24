import React, { useEffect, useState } from "react";

const Progress = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [daysAccessed, setDaysAccessed] = useState(0);
  const [dayStreak, setDayStreak] = useState(1); // Example value, replace with real logic

  useEffect(() => {
    // Fetch user progress data
    fetch('/api/user/progress')
      .then((response) => response.json())
      .then((data) => {
        setTimeSpent(data.timeSpent);
        setDaysAccessed(data.daysAccessed); // Assuming this data is available in the API response
        setDayStreak(data.dayStreak); // Assuming this data is available in the API response
      })
      .catch((error) => console.error('Error fetching progress data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-[#081D22] flex flex-col items-center">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-4 bg-[#1f3a52]">
        <h1 className="text-white text-2xl">Pomofocus</h1>
        <div className="flex gap-4">
          <button className="bg-[#A6ACCD] text-[#1f3a52] px-4 py-2 rounded">Report</button>
          <button className="bg-[#A6ACCD] text-[#1f3a52] px-4 py-2 rounded">Settings</button>
        </div>
      </header>

      {/* Content */}
      <div className="bg-[#043844] w-11/12 md:w-3/5 lg:w-1/3 mt-10 rounded-lg shadow-lg p-6">
        {/* Tabs */}
        <div className="flex justify-around mb-4 border-b">
          <button className="text-[#A6ACCD] font-bold border-b-4 border-[#e4a8a8]">Summary</button>
          <button className="text-[#A6ACCD]">Detail</button>
          <button className="text-[#A6ACCD]">Ranking</button>
        </div>
        
        {/* Activity Summary */}
        <h2 className="text-lg font-bold mb-4">Activity Summary</h2>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center bg-[#081D22] p-4 rounded-lg">
            <p className="text-3xl font-bold">{(timeSpent / 3600).toFixed(1)}</p>
            <p className="text-sm">hours focused</p>
          </div>
          <div className="flex flex-col items-center bg-[#081D22] p-4 rounded-lg">
            <p className="text-3xl font-bold">{daysAccessed}</p>
            <p className="text-sm">days accessed</p>
          </div>
          <div className="flex flex-col items-center bg-[#081D22] p-4 rounded-lg">
            <p className="text-3xl font-bold">{dayStreak}</p>
            <p className="text-sm">day streak</p>
          </div>
        </div>

        {/* Focus Hours */}
        <h2 className="text-lg font-bold mb-4">Focus Hours</h2>
        <div className="flex items-center justify-between mb-4">
          <button className="px-4 py-2 border-2 border-[#A6ACCD] text-[#A6ACCD] rounded-full">Week</button>
          <button className="px-4 py-2 text-[#A6ACCD]">Month</button>
          <button className="px-4 py-2 text-[#A6ACCD]">Year</button>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-[#081D22] h-40 rounded-lg flex justify-center items-center">
          <p className="text-gray-400">No Project</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
