import React from 'react';
import styles from '../styles/Feedback.module.css'; // Create this CSS module for styling

const Feedback = () => {
  const handleFeedbackClick = () => {
    window.open('https://github.com/frypan05/Help/issues', '_blank');
  };

  return (
    <button className={styles.feedbackButton} onClick={handleFeedbackClick}>
      Feedback
    </button>
  );
};

export default Feedback;