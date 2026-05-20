# Blog App Frontend

## Overview
This is the frontend of the Blog Application developed using React and Vite.  
The frontend provides interfaces for users, authors, and admins to interact with the blog platform.

---

# Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Zustand
- Tailwind CSS
- React Hook Form
- React Hot Toast

---

# Frontend Project Structure

```plaintext
Frontend/
└── blog-app/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    │
    ├── src/
    │   ├── assets/
    │   │   ├── hero.png
    │   │   ├── react.svg
    │   │   └── vite.svg
    │   │
    │   ├── Components/
    │   │   ├── Admin.jsx
    │   │   ├── AdminProfile.jsx
    │   │   ├── ArticleByID.jsx
    │   │   ├── Author.jsx
    │   │   ├── AuthorArticles.jsx
    │   │   ├── EditArticle.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── ...
    │   │
    │   ├── store/
    │   │   └── authStore.js
    │   │
    │   ├── styles/
    │   │   └── common.js
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── App.css
    │   └── index.css
    │
    ├── package.json
    ├── vite.config.js
    └── index.html
```

---

# Features

- User Authentication
- Author Dashboard
- Admin Dashboard
- Create Articles
- Edit Articles
- Delete Articles
- View Articles
- Comment on Articles
- Protected Routes
- Responsive UI

---

# Step-by-Step Procedure Followed

## 1. Frontend Setup

Created the frontend using Vite.

```bash
npm create vite@latest
```

Selected:
- React
- JavaScript

---

## 2. Installed Required Packages

```bash
npm install react-router-dom axios zustand react-hook-form react-hot-toast
npm install tailwindcss @tailwindcss/vite
```

---

## 3. Configured Routing

Used React Router DOM for navigation between pages.

Created routes for:
- Home
- Login
- Author Dashboard
- Admin Dashboard
- Article Details

---

## 4. Designed UI Components

Created reusable components:
- Header
- Footer
- Home
- Author Panel
- Admin Panel
- Article Pages

---

## 5. State Management

Used Zustand for storing:
- User authentication data
- User role information

---

## 6. API Integration

Connected frontend with backend using Axios.

Implemented API calls for:
- Login
- Fetch Articles
- Add Articles
- Edit Articles
- Delete Articles
- Comments

---

## 7. Authentication Handling

Stored token and user details after login.

Protected author/admin routes based on roles.

---

## 8. Styling

Used:
- Tailwind CSS
- Custom CSS

for responsive and clean UI design.

---

# How to Run Frontend

## Step 1: Navigate to frontend folder

```bash
cd Frontend/blog-app
```

---

## Step 2: Install dependencies

```bash
npm install
```

---

## Step 3: Start development server

```bash
npm run dev
```

---

## Step 4: Open browser

```plaintext
http://localhost:5173
```

---

# Build Frontend

```bash
npm run build
```

---

# Future Improvements

- Rich text editor
- Dark mode
- Article search and filters
- Like and share functionality
- Image uploads
- Pagination

---

# Author

Developed as a MERN Stack Blog Application project.
