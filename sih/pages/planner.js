import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../styles/Planner.module.css';

const Planner = () => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  const [today, setToday] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');
  const [tasks, setTasks] = useState({});
  
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setToday(now);
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  const generateDateRange = (startDate, numDays) => {
    const dates = [];
    for (let i = -1; i < numDays - 1; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = generateDateRange(today, 4);

  const handleAddNewTask = () => {
    setIsAddingTask(true);
  };

  const handleSaveTask = () => {
    const dateKey = today.toDateString();
    if (newTaskText.trim()) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [dateKey]: [{ text: newTaskText, completed: false }, ...(prevTasks[dateKey] || [])] // Add new task at the top
      }));
      setNewTaskText('');
      setIsAddingTask(false);
    }
  };

  const handleCancelTask = () => {
    setIsAddingTask(false);
    setNewTaskText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveTask();
    } else if (e.key === 'Escape') {
      handleCancelTask();
    }
  };

  const handleToggleTask = (dateKey, taskIndex) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...(prevTasks[dateKey] || [])];
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
      return {
        ...prevTasks,
        [dateKey]: updatedTasks
      };
    });
  };

  const redirectToGitHubIssues = () => {
    window.open('https://github.com/frypan05/Help/issues', '_blank');
  };

  const redirectToIndex = () => {
    router.push('/'); // Redirect to the index page
  };

  return (
    <>
      <Head>
        <title>Daily Planner</title>
        <meta name="description" content="Daily Planner" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tabs}>
            <button className={styles.activeTab} onClick={redirectToIndex}>Back To Platform</button>
            <button>Routine</button>
            <button>Task Dump</button>
          </div>
          <div className={styles.headerRight}>
            <button className={styles.feedbackButton} onClick={redirectToGitHubIssues}>Feedback</button>
            <button className={styles.focusButton} onClick={redirectToGitHubIssues}>Focus</button>
            <span className={styles.time}>{currentTime}</span>
            <button className={styles.timeFormat}>12hr</button>
          </div>
        </div>
        <div className={styles.content}>
          {weekDates.map((date, index) => {
            const dateKey = date.toDateString();
            const dayTasks = tasks[dateKey] || [];
            return (
              <div key={index} className={`${styles.dayColumn} ${date.toDateString() === today.toDateString() ? styles.today : ''}`}>
                <div className={styles.dayHeader}>
                  <span className={styles.dayName}>{formatDate(date).split(',')[0].toUpperCase()}</span>
                  <span className={styles.dayDate}>{formatDate(date).split(',')[1]}</span>
                  {date.toDateString() === today.toDateString() && <span className={styles.todayLabel}>TODAY</span>}
                </div>
                <div className={styles.taskArea}>
                  {dayTasks.map((task, taskIndex) => (
                    <div key={taskIndex} className={styles.taskItem}>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleTask(dateKey, taskIndex)}
                      />
                      <span className={task.completed ? styles.completedTask : ''}>{task.text}</span>
                    </div>
                  ))}
                  {isAddingTask && date.toDateString() === today.toDateString() && (
                    <div className={styles.newTaskInput}>
                      <input
                        type="text"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type and press enter to save or esc to cancel"
                        autoFocus
                      />
                      <div className={styles.newTaskActions}>
                        <button onClick={handleSaveTask}>SAVE</button>
                        <button onClick={handleCancelTask}>CANCEL</button>
                        <span className={styles.dateIndicator}>{formatDate(date)}</span>
                      </div>
                    </div>
                  )}
                  {date.toDateString() === today.toDateString() && !isAddingTask && (
                    <button className={styles.addTaskButton} onClick={handleAddNewTask}>
                      + Add task
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Planner;
