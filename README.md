# Full-Stack Login Application

## Overview

AuthPortal is a simple full-stack login application built using **React (frontend)** and **Node.js with Express (backend)**.
The application allows users to enter a username and password, validates the credentials using a backend API, and redirects the user to a welcome page upon successful authentication.

This project demonstrates basic **full-stack development concepts**, including API integration, React hooks, authentication flow, and proper HTTP response handling.

---

## Tech Stack

### Frontend

* React
* React Hooks (useState, useEffect)
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* CORS
* dotenv

---

## Features

* Login page with username and password
* Backend API for authentication (`POST /login`)
* Redirects to welcome page after successful login
* Displays error message for invalid credentials
* Stores username in **localStorage** to remember the user
* Uses proper HTTP status codes
* Clean UI built with Tailwind CSS

---

## Project Structure

```
LoginApp
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Login.jsx
│   │   │   └── Welcome.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## API Endpoint

### POST `/login`

Validates user credentials.

### Request Body

```
{
  "username": "admin",
  "password": "admin"
}
```

### Responses

| Status Code | Description                  |
| ----------- | ---------------------------- |
| 200         | Login successful             |
| 401         | Invalid credentials          |
| 400         | Missing username or password |

---

## How to Run the Project

### 1. Clone the Repository

```
git clone https://github.com/prabhas-code/Prabhas-fullstack-login-app.git
```

---

### 2. Start Backend

```
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Start Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Test Login Credentials

```
Username: admin
Password: admin
```

---
## Live Demo

Frontend:
https://your-frontend.onrender.com

Backend API:
https://login-backend-1692.onrender.com/login 

## Future Improvements

* Store users in a database
* Hash passwords using bcrypt
* Implement JWT authentication
* Add rate limiting for security
* Deploy frontend and backend to cloud platforms

---

## Author

**Prabhas Madipadiga**
