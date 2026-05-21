Task Manager Application

A full-stack Task Manager web application built using the MERN stack with JWT Authentication and Role-Based Access Control.

Features

Authentication
User Registration
User Login
Password Hashing using bcryptjs
JWT Authentication
Protected Routes

Role-Based Access
User Role
Admin Role
Only authorized users can access protected APIs

Task Management
Create Task
Read Tasks
Update Task
Delete Task
Toggle Task Status

Frontend
React.js Frontend
Responsive UI
Login/Register Pages
Protected Dashboard
Task CRUD Operations

Security
JWT Token Verification
Password Encryption
Input Validation
Protected API Routes
API Documentation
Swagger API Documentation
RESTful APIs

Tech Stack

Frontend
React.js
React Router DOM
Axios
CSS

Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs

Folder Structure
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

Installation
Clone Repository
git clone <your-github-repo-link>
Backend Setup
Go to backend folder
cd backend
Install Dependencies
npm install
Create .env File
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
Start Backend Server
npm run dev

Backend runs on:
http://localhost:5000

Frontend Setup
Go to frontend folder
cd frontend
Install Dependencies
npm install
Start Frontend
npm run dev

Frontend runs on:
http://localhost:5173

API Endpoints
Authentication APIs
Register User
POST /api/auth/register
Login User
POST /api/auth/login
Task APIs
Get All Tasks
GET /tasks
Get Single Task
GET /tasks/:id
Create Task
POST /tasks
Update Task
PATCH /tasks/:id
Delete Task
DELETE /tasks/:id

Swagger Documentation
Visit:
http://localhost:5000/api-docs

Scalability Notes
This project follows a scalable modular architecture:
Separate folders for routes, controllers, models, and middleware
JWT authentication middleware reusable across modules
RESTful API structure
Easily extendable for microservices architecture
Can integrate Redis caching in future
Ready for Docker deployment
Suitable for load balancing and cloud deployment

Future Improvements
Pagination
Search & Filter
Redis Caching
Docker Deployment
Refresh Tokens
Email Verification
Role Management Panel

Author
Ashlesha Mandhare