// pages/api/user/progress.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Replace with your own logic to fetch user data from the database
      // Example pseudo-code:
      // const userId = req.user.id;
      // const userData = await getUserProgressData(userId);
      // res.status(200).json({ timeSpent: userData.timeSpent });
  
      res.status(200).json({ timeSpent: 1200 }); // Replace with real data
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }