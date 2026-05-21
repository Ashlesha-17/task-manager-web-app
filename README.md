# Task Manager Application

A full-stack Task Manager web application built using the MERN stack with JWT Authentication and Role-Based Access Control.

---

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes

### Role-Based Access
- User Role
- Admin Role
- Only authorized users can access protected APIs

### Task Management
- Create Task
- Read Tasks
- Update Task
- Delete Task
- Toggle Task Status

### Frontend
- React.js Frontend
- Responsive UI
- Login/Register Pages
- Protected Dashboard
- Task CRUD Operations

### Security
- JWT Token Verification
- Password Encryption
- Input Validation
- Protected API Routes

### API Documentation
- Swagger API Documentation
- RESTful APIs

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## Folder Structure

```bash
TaskManagerWebApp/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── swagger.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
└── README.md
```
---

##Installation
-Clone Repository
git clone https://github.com/Ashlesha-17/task-manager-web-app

Backend Setup
cd backend
npm install

Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Start Backend
npm run dev

Backend runs on:
http://localhost:5000

---

Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

API Endpoints

Authentication APIs
POST /api/auth/register
POST /api/auth/login

Task APIs
GET /tasks
GET /tasks/:id
POST /tasks
PATCH /tasks/:id
DELETE /tasks/:id

---

## Live Demo

Frontend:
https://task-manager-web-app-wine.vercel.app/

Backend API:
https://task-manager-web-app-a0jz.onrender.com/

Swagger Docs:
https://task-manager-web-app-a0jz.onrender.com/api-docs

---

Scalability Notes
Modular architecture with separation of concerns
JWT authentication middleware for secure routes
RESTful API structure
Easily extendable for microservices architecture
Can integrate Redis caching
Ready for Docker deployment
Suitable for cloud deployment and load balancing

---

Future Improvements
Pagination
Search and Filter
Redis Caching
Docker Deployment
Refresh Tokens
Email Verification
Admin Panel

---

Author
Ashlesha Mandhare