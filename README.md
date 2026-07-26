<div align="center">

# 🚀 LinkedIn AI Studio

### AI-Powered LinkedIn Post Generator using Google Gemini AI

Transform your project details into engaging, professional LinkedIn posts with AI.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-orange?logo=mysql)](https://www.mysql.com/)
[![TiDB](https://img.shields.io/badge/Cloud-TiDB-00C0FF)](https://tidbcloud.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini-blueviolet)](https://ai.google.dev/)
[![JWT](https://img.shields.io/badge/Auth-JWT-red)](https://jwt.io/)
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7)](https://render.com/)

🌐 **Live Demo:** https://linkedin-ai-studio-five.vercel.app

⚙️ **Backend API:** https://linkedin-ai-studio-db.onrender.com

💻 **Repository:** https://github.com/Hemalakshmim-gif/linkedin-ai-studio

⭐ If you like this project, don't forget to star the repository!

</div>

---

# 📖 About the Project

LinkedIn AI Studio is a full-stack AI-powered web application that helps students, developers, and professionals generate engaging LinkedIn posts from project details in just a few seconds.

Instead of spending time writing posts manually, users simply provide their project information, choose the writing tone, audience, and length, and the application generates a polished LinkedIn post using **Google Gemini AI**.

The application also includes secure authentication and a personal history feature so users can manage all their generated posts.

---

# ✨ Features

- 🤖 AI-powered LinkedIn Post Generation
- 🔐 Secure User Authentication (JWT)
- 👤 User Registration & Login
- 📝 Personalized AI-generated content
- 📂 Save generated posts
- 📜 View post history
- 🗑 Delete posts
- 🎯 Multiple writing tones
- 👥 Audience selection
- 📏 Custom content length
- 📱 Responsive user interface
- ⚡ Fast and optimized performance

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- CSS3
- Axios
- Framer Motion
- Lucide React

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

---

## Database

- MySQL
- TiDB Cloud

---

## AI Integration

- Google Gemini API

---

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → TiDB Cloud

---

# 📂 Project Structure

```
linkedin-ai-studio
│
├── client
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   └── utils
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── prompts
│   ├── routes
│   ├── services
│   ├── utils
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# 📸 Application Preview

> Add screenshots here after uploading them to GitHub.

Suggested screenshots:

- 🏠 Home Page
- 🔐 Login Page
- 🤖 AI Workspace
- ✨ Generated LinkedIn Post
- 📜 History Page
- 👤 Profile Page

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Hemalakshmim-gif/linkedin-ai-studio.git
```

```
cd linkedin-ai-studio
```

---

## Install Frontend

```bash
cd client
npm install
```

Run

```bash
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
```

Run

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

# 🗄 Database Schema

## Users

| Column | Type |
|----------|----------|
| id | INT |
| fullName | VARCHAR(100) |
| email | VARCHAR(100) |
| password | VARCHAR(255) |
| github | VARCHAR(255) |
| linkedin | VARCHAR(255) |
| college | VARCHAR(255) |
| createdAt | TIMESTAMP |

---

## Posts

| Column | Type |
|----------|----------|
| id | INT |
| userId | INT |
| title | VARCHAR(255) |
| description | TEXT |
| techStack | TEXT |
| features | TEXT |
| achievements | TEXT |
| tone | VARCHAR(50) |
| audience | VARCHAR(50) |
| length | VARCHAR(50) |
| generatedPost | LONGTEXT |
| createdAt | TIMESTAMP |

---

# 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** to provide secure authentication.

Features include:

- User Registration
- User Login
- Protected Routes
- Token Validation
- Secure API Access

---

# 🤖 AI Workflow

```
User Input
      │
      ▼
Frontend (React)
      │
      ▼
Express Backend API
      │
      ▼
Google Gemini AI
      │
      ▼
Generated LinkedIn Post
      │
      ▼
Save to MySQL (TiDB Cloud)
      │
      ▼
Display in History
```

---

# 💡 What I Learned

This project helped me gain practical experience in:

- Full Stack Web Development
- REST API Development
- Authentication using JWT
- AI Integration using Google Gemini
- Prompt Engineering
- Cloud Database Integration
- MySQL Database Design
- Production Deployment
- Git & GitHub Workflow
- Render Deployment
- Vercel Deployment
- Real-world debugging and troubleshooting

---

# 🚀 Future Enhancements

- 📄 Export posts as PDF
- 📋 One-click Copy to Clipboard
- 🎨 Rich Text Editor
- 🌙 Dark Mode
- 😊 AI-generated emojis
- 🏷 AI-generated hashtags
- 🔗 LinkedIn OAuth Login
- 📊 User Analytics Dashboard
- 📱 Progressive Web App (PWA)

---

# 👨‍💻 Developer

## Hemalakshmi M

Computer Science Engineering Student

💻 GitHub

https://github.com/Hemalakshmim-gif

🌐 Live Demo

https://linkedin-ai-studio-five.vercel.app

⚙ Backend API

https://linkedin-ai-studio-db.onrender.com

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome!

If you'd like to improve this project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

# ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It really motivates me to continue building and sharing more open-source projects.

---

<div align="center">

### ⭐ Thank you for visiting LinkedIn AI Studio ⭐

Built with ❤️ using React, Node.js, MySQL & Google Gemini AI

</div>
