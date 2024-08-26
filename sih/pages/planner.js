import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Planner.module.css'; // Create this CSS module for styling

const Planner = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    // Set the current date
    setToday(new Date());
  }, []);

  // Get the current date formatted
  const formatDate = (date) => {
    return `${date.toLocaleDateString('en-GB')}`; // Format as DD/MM/YYYY
  };

  // Sample data for demonstration
  const tasks = [
    { time: '09:00 AM', title: 'Morning Meeting' },
    { time: '12:00 PM', title: 'Lunch Break' },
    { time: '03:00 PM', title: 'Project Work' },
    { time: '06:00 PM', title: 'Evening Exercise' },
  ];

  return (
    <>
      <Head>
        <title>Daily Planner</title>
        <meta name="description" content="Daily Planner" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Daily Planner</h1>
          <p>{formatDate(today)}</p>
        </div>
        <div className={styles.cards}>
          {tasks.map((task, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTime}>{task.time}</div>
              <div className={styles.cardTitle}>{task.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Planner;