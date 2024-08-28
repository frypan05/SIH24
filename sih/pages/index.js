// pages/index.js

import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Learning Platform</h1>
      <div className={styles.cardContainer}>
        <Link href="/planner">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Daily Planner</h2>
            <p className={styles.cardDescription}>Plan your daily learning tasks.</p>
          </div>
        </Link>
        <Link href="/resources">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Learning Resources</h2>
            <p className={styles.cardDescription}>Access various study materials.</p>
          </div>
        </Link>
        <Link href="/progress">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Dashboard</h2>
            <p className={styles.cardDescription}>Monitor your learning progress.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}