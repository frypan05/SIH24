// pages/api/auth/login.js
import jwt from 'jsonwebtoken';

const users = [
  { email: "daksh@mail.com", password: "cholekulche" },
  { email: "ayush@mail.com", password: "nobita" },
  { email: "alpa@mail.com", password: "cartoon" },
  { email: "anchal@mail.com", password: "laptophang" },
  // Add more users as needed
];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check against the list of users
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Authentication successful
      // Generate JWT token
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        return res.status(500).json({ message: "Internal server error: Secret key missing" });
      }

      const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

      res.status(200).json({ message: "Login successful", token });
    } else {
      // Authentication failed
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
