# Blog App Backend

## Overview

This is the backend of the Blog Application developed using:
- Node.js
- Express.js
- MongoDB
- Mongoose

The backend handles:
- Authentication
- Authorization
- Article Management
- Comments
- Role-based Access

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- cookie-parser
- cors

---

# Backend Project Structure

```plaintext
Backend/
├── API/
│   ├── adminAPI.js
│   ├── authorAPI.js
│   ├── commonAPI.js
│   └── userAPI.js
│
├── middlewares/
│   └── verifyToken.js
│
├── models/
│   ├── ArticleModel.js
│   └── UserModel.js
│
├── server.js
├── package.json
├── .env
└── *.http files
```

---

# Features

- JWT Authentication
- Role-based Authorization
- User APIs
- Author APIs
- Admin APIs
- CRUD Operations on Articles
- Add Comments
- Protected Routes
- MongoDB Database Integration

---

# Step-by-Step Procedure Followed

## 1. Backend Initialization

Created backend project using Node.js.

```bash
npm init -y
```

---

## 2. Installed Required Packages

```bash
npm install express mongoose dotenv cors cookie-parser bcryptjs jsonwebtoken
```

For development:

```bash
npm install --save-dev nodemon
```

---

## 3. Created Express Server

Configured:
- Express app
- Middleware
- JSON parsing
- Cookie parser
- CORS

---

## 4. Connected MongoDB

Used Mongoose to connect backend with MongoDB database.

```js
connect(process.env.DB_URL)
```

---

## 5. Created Models

Created:
- User Model
- Article Model

Used schemas for storing:
- User details
- Roles
- Articles
- Comments

---

## 6. Implemented Authentication

Used:
- bcryptjs for password hashing
- JWT for token generation and verification

---

## 7. Implemented Middleware

Created `verifyToken.js` middleware to:
- Verify JWT tokens
- Check user roles
- Protect APIs

---

## 8. Created APIs

### User APIs
- Read articles
- Add comments

### Author APIs
- Create article
- Edit article
- Delete article
- Get own articles

### Admin APIs
- Manage users/articles

---

## 9. Error Handling

Added:
- Route not found handling
- Try-catch blocks
- Proper status codes

---

# Environment Variables

Create a `.env` file inside Backend folder.

Example:

```env
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=4000
```

---

# How to Run Backend

## Step 1: Navigate to backend folder

```bash
cd Backend
```

---

## Step 2: Install dependencies

```bash
npm install
```

---

## Step 3: Start server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## Step 4: Backend runs on

```plaintext
http://localhost:4000
```

---

# API Base Routes

```plaintext
/user-api
/admin-api
/author-api
/common-api
```

---

# Future Improvements

- Refresh Tokens
- Image Uploads
- Email Verification
- Pagination
- Rate Limiting
- Better Logging
- Deployment Optimization

---

# Author

Developed as a MERN Stack Blog Application project.
