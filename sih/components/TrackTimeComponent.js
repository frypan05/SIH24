import { useEffect } from 'react';

const TrackTimeComponent = () => {
  useEffect(() => {
    const startTime = new Date().getTime();

    const calculateTimeSpent = () => {
      const endTime = new Date().getTime();
      const timeSpent = endTime - startTime; // in milliseconds
      // Send this to your backend API
      fetch('/api/user/update-time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeSpent }),
      });
    };

    window.addEventListener('beforeunload', calculateTimeSpent);

    return () => {
      window.removeEventListener('beforeunload', calculateTimeSpent);
    };
  }, []);

  return null;
};

export default TrackTimeComponent;
