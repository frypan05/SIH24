// pages/api/user/progress.js
import jwt from 'jsonwebtoken';

let userProgress = {}; // In-memory store for user progress

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token
    if (!token) {
      return res.status(401).json({ message: 'Authorization required' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { email } = decoded;

      // Initialize user progress if not already present
      if (!userProgress[email]) {
        userProgress[email] = {
          timeSpent: 0,
          daysAccessed: 0,
          dayStreak: 1,
        };
      }

      res.status(200).json(userProgress[email]);
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else if (req.method === 'POST') {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token
    if (!token) {
      return res.status(401).json({ message: 'Authorization required' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { email } = decoded;

      // Assume we're receiving time spent in the request body
      const { timeSpent = 0 } = req.body;

      // Update user progress
      if (!userProgress[email]) {
        userProgress[email] = {
          timeSpent: 0,
          daysAccessed: 0,
          dayStreak: 1,
        };
      }

      userProgress[email].timeSpent += timeSpent;
      userProgress[email].daysAccessed += 1; // Example logic, update as needed
      userProgress[email].dayStreak = userProgress[email].daysAccessed; // Simplified streak logic

      res.status(200).json({ message: 'Progress updated successfully' });
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
