export default function handler(req, res) {
    if (req.method === 'POST') {
      // Simulate a signup process
      res.status(200).json({ message: 'Signup successful' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }