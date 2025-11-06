# 💬 Chat Application

A full-stack real-time chat application built with **Spring Boot (Java)** for the backend and **React + Vite + TailwindCSS** for the frontend.  
Supports **WebSocket-based real-time messaging** and stores data in **MongoDB**.

---

## ✨ Features

- 🔐 User authentication (to be added/customized)  
- 💬 Real-time messaging with WebSockets  
- 📦 Backend with Spring Boot & MongoDB  
- ⚡ Frontend with React + Vite for fast builds  
- 🎨 Styled using TailwindCSS with dark mode support  
- 🚀 Developer-friendly setup with hot-reload  

---

## 🛠️ Tech Stack

**Frontend**  
- React  
- Vite  
- TailwindCSS  

**Backend**  
- Spring Boot  
- WebSockets  
- MongoDB  
- Lombok  

---

## 📂 Project Structure

```
project-root/
│── chat-app-backend/       # Spring Boot backend
│   ├── src/                # Java source files
│   └── pom.xml             # Maven build config
│
│── chat-app-frontend/      # React frontend
│   ├── src/                # React components
│   ├── vite.config.js      # Vite configuration
│   └── tailwind.config.js  # Tailwind configuration
│
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ashish007j/Real-Time-Chat-application.git chat-app
cd chat-app
```

### 2️⃣ Backend Setup
```bash
cd chat-app-backend
./mvnw spring-boot:run
```
Backend will start at **http://localhost:8080**

### 3️⃣ Frontend Setup
```bash
cd chat-app-frontend
npm install
npm run dev
```
Frontend will start at **http://localhost:5173**


## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to open a PR or issue.

---

## 📜 License
This project is licensed under the MIT License.  
