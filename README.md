# login-signup-page

## Authentication App

This is a simple **Authentication App** built using **Node.js**, **Express**, and **MongoDB**. It allows users to sign up and log in securely, and includes JWT-based authentication.

## Technologies Used:
  - **Frontend**: React
  - **Backend**: Node.js, Express
  - **Database**: MongoDB
  - **Authentication**: JSON Web Tokens (JWT)
  - **Environment Variables**: dotenv

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
```
3. Run the React app:
```
npm start
```
# Frontend Setup
1. Navigate to the backend directory
```
cd backend
```
2. Install dependencies
```
npm install
```
3. Create a **.env** file in the **src** directory with the following content:
```
MONGO_URI=mongodb://localhost:you db url/authentication
JWT_SECRET=your_jwt_secret_key
Replace your_jwt_secret_key with a secure key for JWT generation.
```
4. Start the backend server:
``` 
npm run dev
```
# Project Structure
1. **Frontend**


```
src/
-- components/           
|   |-- Signup.js          
|   |-- Login.js          
|-- services/            
|   |-- api.js
|-- App.js                 
-- structure
|-- index.js               
-- app
|   |-- db.js

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
# Project Name

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
