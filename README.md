# login-signup-page

## Authentication App

This is a simple **Authentication App** built using **Node.js**, **Express**, and **MongoDB**. It allows users to sign up and log in securely, and includes JWT-based authentication.

## Technologies Used:
  - **Frontend**: React
  - **Backend**: Node.js, Express
  - **Database**: MongoDB
  - **Authentication**: JSON Web Tokens (JWT)
  - **Environment Variables**: dotenv

## Screenshot
![](https://github.com/codingexport/login-signup-page/blob/main/Vite%20%2B%20React%20-%20Google%20Chrome%202024-12-01%2012-33-28.gif)
## Features:
  - User signup with email, password, and phone number.
  - User login with email and password.
  - JWT-based authentication for secure user access.
  - Responsive design using Bootstrap.

## Setup Instructions:

### Prerequisites:
Before starting, make sure you have the following installed:
  - **Node.js** (https://nodejs.org)
  - **MongoDB** (or use a cloud MongoDB service like MongoDB Atlas)
### **Frontend Setup**

1. Navigate to the frontend directory:
```bash
- cd frontend
```
2. Install dependencies
```
npm install
npm init -y
npm install express mongoose bcrypt jsonwebtoken cors dotenv
npm install axios
```
# create file
```
New-Item -ItemType File -Path "src\components\Signup.js"
New-Item -ItemType File -Path "src\components\Login.js"
New-Item -ItemType File -Path "src\services\api.js"
New-Item -ItemType File -Path "src\App.js"
New-Item -ItemType File -Path "src\index.js"

```
3. Run the React app:
```
npm start
```
# backend Setup
1. Navigate to the backend directory
```
cd backend
```
2. Install dependencies
```
npm install
npm init -y
npm install express mongoose bcrypt jsonwebtoken dotenv cors
npm install --save-dev nodemon
```
 # Create directories
   ```
  
mkdir src
mkdir src/controllers
mkdir src/models
mkdir src/routes
mkdir src/config

# Create files
New-Item src/controllers/authController.js -ItemType File
New-Item src/models/User.js -ItemType File
New-Item src/routes/authRoutes.js -ItemType File
New-Item src/server.js -ItemType File
New-Item src/config/db.js -ItemType File
   ```
4. Create a **.env** file in the **src** directory with the following content:
```
MONGO_URI=mongodb://localhost:you db url/authentication

```
5. Start the backend server:
``` 
npm run dev
```

# Project Structure
1. **Frontend**


```
src/
  |-- components/            # React components for UI
  |   |-- Signup.js          # Signup form component
  |   |-- Login.js           # Login form component
  |-- services/              # API calls to backend
  |   |-- api.js
  |-- App.js                 # React Router and App structure
  |-- index.js               # Entry point for React app

```

2. ** Backend **
```
src/
|-- controllers/           # Authentication logic (signup, login)
|   |-- authController.js
|-- models/                # MongoDB schemas
|   |-- User.js
|-- routes/                # API routes
|   |-- authRoutes.js
|-- server.js              # Express app initialization
|-- config/                # Database connection
|   |-- db.js

```


## Environment Variables

- **MONGO_URI**: MongoDB connection string.
- **JWT_SECRET**: Secret key for signing JWT tokens.

## Running Tests

This project does not have specific tests implemented yet. You can add testing frameworks like **Jest** or **Mocha** for unit and integration tests.

## Troubleshooting

- **MongoDB connection issues**: Ensure MongoDB is running locally or that the **MONGO_URI** is correctly set to a cloud MongoDB instance (e.g., MongoDB Atlas).
- **Backend not starting**: Check for issues with the `.env` file or ensure dependencies are properly installed.

## Future Improvements

- Add user email verification.
- Implement password reset functionality.
- Improve the frontend with a more user-friendly design and validation.

  ## Author

**Akhil**  
Developed with 💻 and ❤️ for **OctaNet-Services**.
