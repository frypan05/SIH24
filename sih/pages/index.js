import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Updated Heading */}
       {/* Apply the new Raleway font style */}
        {/* Apply the new Raleway font style */}
      <h1 className="text-7xl font-bold text-[#2BBCDC] mb-8 text-center raleway-bold">
        StudyNexus
      </h1>
      <div className="flex justify-center space-x-8 mt-8">

        <Link href="/planner">
          <div className={`${styles.card} bg-[#1A1E24] hover:bg-[#1C5E6C] transition-all duration-300 transform hover:scale-105`}>
            <h2 className="text-2xl font-bold text-white">Daily Planner</h2>
            <p className="text-gray-300 mt-2">Plan your daily learning tasks.</p>
          </div>
        </Link>
        <Link href="/resources">
          <div className={`${styles.card} bg-[#1A1E24] hover:bg-[#1C5E6C] transition-all duration-300 transform hover:scale-105`}>
            <h2 className="text-2xl font-bold text-white">Learning Resources</h2>
            <p className="text-gray-300 mt-2">Access various study materials.</p>
          </div>
        </Link>
        <Link href="/progress">
          <div className={`${styles.card} bg-[#1A1E24] hover:bg-[#1C5E6C] transition-all duration-300 transform hover:scale-105`}>
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            <p className="text-gray-300 mt-2">Monitor your learning progress.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
