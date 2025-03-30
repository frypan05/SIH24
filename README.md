# SIH24
Official Repo for SIH 2024

# Learning Path Dashboard

An intelligent, user-centric platform designed to facilitate structured skill development with adaptive learning paths, progress tracking, and resource management.

## Overview

The Learning Path Dashboard optimizes your learning experience by providing adaptive learning paths, real-time progress tracking, and comprehensive resource management. Built with a clean, distraction-free interface, it helps you focus on what matters most—your learning journey.

## Key Features

* 📌 **Daily Planner** – Organize and prioritize tasks for a structured learning routine
* 📊 **Progress Tracking** – Real-time insights into learning milestones and time spent
* 📂 **Resource Management** – Upload, categorize, and access educational resources seamlessly
* 📈 **Adaptive Learning Paths** – Dynamically adjust learning recommendations based on user engagement
* 🌐 **User Authentication** – Secure login system ensuring personalized dashboards
* 🎨 **Minimal & Responsive UI** – A clean, distraction-free interface optimized for all devices

## Technology Stack

* **Frontend:** Next.js, Stitches (CSS-in-JS), React
* **Backend:** FastAPI, PostgreSQL/MySQL (depending on deployment needs)
* **Authentication:** JWT-based secure login system
* **Real-Time Features:** WebSockets for live updates
* **Deployment:** Vercel for frontend, Dockerized backend services

## Installation & Setup

### Prerequisites

Ensure you have the following installed:
* Node.js & npm
* Python (≥3.8) with FastAPI
* PostgreSQL/MySQL
* Docker (optional for containerized setup)

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/frypan05/SIH24.git
   cd sih
   ```

2. **Install Dependencies**
   
   Frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   
   Backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

3. **Configure Database**
   
   Set up PostgreSQL/MySQL and update the `.env` files accordingly:
   
   ```
   # backend/.env example
   DATABASE_URL=postgresql://username:password@localhost/dbname
   SECRET_KEY=your_secret_key_here
   ```

## Usage

1. Navigate to `http://localhost:3000` to access the dashboard
2. Create an account and start managing your learning path
3. Track progress and utilize the daily planner for optimized learning

## Future Enhancements

* **AI-Driven Learning Suggestions** – Intelligent course recommendations based on progress
* **Collaborative Learning Spaces** – Real-time study groups and shared resources
* **Gamification Elements** – Achievement badges and streak tracking

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
Repository owners and Moderators. 

Project Link: [https://github.com/frypan05/SIH24](https://github.com/frypan05/SIH24)
