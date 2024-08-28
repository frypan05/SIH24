// pages/api/auth/login.js
export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email, password } = req.body;
  
      // Replace this with your own authentication logic
      // Example logic: Check against a hardcoded user
      const user = { email: "dummy@mail.com", password: "123" };
  
      if (email === user.email && password === user.password) {
        // Authentication successful
        res.status(200).json({ message: "Login successful" });
      } else {
        // Authentication failed
        res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }