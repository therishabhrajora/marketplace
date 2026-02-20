# 🛒 Marketplace

A full-stack marketplace application built with modern web and mobile technologies.

This project includes:

* 🌐 React Web App
* 📱 React Native Mobile App (Expo)
* 🚀 Node.js + Express Backend
* 🍃 MongoDB Atlas Database
* 🔐 JWT Authentication
* ❤️ Favorites System
* 📦 Full CRUD Operations

---

# 🌍 Live Deployment

### Backend API

```
https://marketplace-ysbx.onrender.com
```

### Web App

(Replace with your Netlify link)

```
https://mobileappone.netlify.app
```

### Mobile App (APK)

(Add your Expo build link here)

---

# 🧰 Tech Stack

## Frontend (Web)

* React
* React Router DOM
* Axios
* Tailwind CSS

## Mobile

* React Native
* Expo
* React Navigation

## Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt

---

# 📁 Project Structure

```
marketplace/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── web/
│   ├── pages/
│   ├── components/
│   ├── api/
│   └── App.js
│
└── mobile/
    ├── screens/
    ├── api/
    └── App.js
```

---

# ⚙️ Local Setup Instructions

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/therishabhrajora/marketplace.git
cd marketplace
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file inside backend folder

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Backend Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 3️⃣ Seed Database (Optional)

Inside backend folder:

```bash
node seed.js
```

This will insert:

* 2 Test Users
* 10 Sample Products

---

# 🔑 Test Credentials

Use these credentials to test login:

```
Email: test1@mail.com
Password: 123456
```

OR

```
Email: test2@mail.com
Password: 123456
```

---

# 📡 API Documentation

## Base URL

```
https://marketplace-ysbx.onrender.com
```

---

## 🔐 Authentication Routes

### Register

```
POST /auth/register
```

Body:

```json
{
  "email": "user@mail.com",
  "password": "123456"
}
```

---

### Login

```
POST /auth/login
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

# 📦 Product Routes

---

### Get All Products (Search + Pagination)

```
GET /products?search=phone&page=1&limit=10
```

---

### Get Single Product

```
GET /products/:id
```

---

### Create Product (Auth Required)

```
POST /products
```

Headers:

```
Authorization: Bearer TOKEN
```

---

### Update Product (Auth Required)

```
PUT /products/:id
```

---

### Delete Product (Auth Required)

```
DELETE /products/:id
```

---

### Toggle Favorite (Auth Required)

```
POST /products/favorite/:id
```

---

### Get My Favorites (Auth Required)

```
GET /products/favorites/my
```

---

# 🔐 Authentication System

* JWT based authentication
* Token stored in localStorage (Web)
* Protected routes require:

```
Authorization: Bearer TOKEN
```

---

# ✨ Features

* User Registration & Login
* Product CRUD (Create, Read, Update, Delete)
* Search & Pagination
* Favorites System
* Profile Page
* Protected UI Elements
* Mobile + Web Versions
* Deployed Backend & Database

---

# 🚀 Deployment

### Backend

* Hosted on Render
* Connected to MongoDB Atlas
* Auto-seed support on first deployment

### Web

* Hosted on Netlify
* SPA routing via `_redirects`

### Mobile

* Built using Expo EAS
* APK generated via cloud build

---

# 🧪 How To Test

1. Register or login using test credentials
2. View products
3. Add product to favorites
4. Visit Profile → View Favorites
5. Update/Delete products (if logged in)

---

# 👨‍💻 Author

**Rishabh Rajora**
Full Stack Developer

---

# 🔮 Future Improvements

* Admin Role System
* Cart System
* Payment Gateway Integration
* Image Upload (Cloudinary)
* Toast Notifications
* Protected Route Component


