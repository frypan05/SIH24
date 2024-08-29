import { connectToDatabase } from '../../../utils/db';
import User from '../../../models/user';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { timeSpent } = req.body;

      // Connect to the database
      await connectToDatabase();

      // Example: Use JWT to get the user ID
      const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token
      if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure you have JWT_SECRET in .env
      const userId = decoded.id; // Assuming 'id' is stored in the token

      // Find the user and update the time spent
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Update the time spent
      user.timeSpent += timeSpent; // Accumulate time spent
      await user.save();

      res.status(200).json({ message: 'Time updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}