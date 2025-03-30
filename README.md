# SIH24
Official Repo for SIH 2024

Learning Path Dashboard

Overview

The Learning Path Dashboard is an intelligent, user-centric platform designed to facilitate structured skill development. It provides adaptive learning paths, progress tracking, and resource management, enabling users to optimize their learning experience efficiently.

Key Features

📌 Daily Planner – Organize and prioritize tasks for a structured learning routine.

📊 Progress Tracking – Real-time insights into learning milestones and time spent.

📂 Resource Management – Upload, categorize, and access educational resources seamlessly.

📈 Adaptive Learning Paths – Dynamically adjust learning recommendations based on user engagement.

🌐 User Authentication – Secure login system ensuring personalized dashboards.

🎨 Minimal & Responsive UI – A clean, distraction-free interface optimized for all devices.

Technology Stack

Frontend: Next.js, Stitches (CSS-in-JS), React

Backend: FastAPI, PostgreSQL/MySQL (depending on deployment needs)

Authentication: JWT-based secure login system

Real-Time Features: WebSockets for live updates

Deployment: Vercel for frontend, Dockerized backend services

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js & npm

Python (≥3.8) with FastAPI

PostgreSQL/MySQL

Docker (optional for containerized setup)

Setup Instructions

Clone the Repository

git clone https://github.com/yourusername/learning-path-dashboard.git
cd learning-path-dashboard

Install Dependencies

Frontend

cd frontend
npm install
npm run dev

Backend

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Configure DatabaseSet up PostgreSQL/MySQL and update .env files accordingly.

Usage

Navigate to http://localhost:3000 to access the dashboard.

Create an account and start managing your learning path.

Track progress and utilize the daily planner for optimized learning.

Future Enhancements

AI-Driven Learning Suggestions – Intelligent course recommendations based on progress.

Collaborative Learning Spaces – Real-time study groups and shared resources.

Gamification Elements – Achievement badges and streak tracking.

Contributing

We welcome contributions! Feel free to submit PRs, report issues, or suggest improvements.

License

This project is licensed under the MIT License.
