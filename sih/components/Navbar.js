import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Update this CSS module

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US')); // Exclude timezone name
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MyPlanner</Link>
      </div>
      <ul className={styles.navLinks}>
        {/* Add more navigation links as needed */}
      </ul>
      <div className={styles.time}>
        {currentTime}
      </div>
    </nav>
  );
};

export default Navbar;