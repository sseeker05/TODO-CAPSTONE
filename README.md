
Todo App (Full Stack)

A full-stack Todo app built with React.js on the frontend and Node.js/Express on the backend. This application allows users to create, read, update, and delete tasks, providing a simple and efficient way to manage daily tasks.

Features

Create Todo: Add new tasks to your todo list.
Read Todos: View all existing tasks.
Update Todo: Mark tasks as completed or edit the task text.
Delete Todo: Remove tasks from the list.
User Authentication: Secure routes using JWT tokens for login.
Tech Stack

Frontend

React.js: A JavaScript library for building user interfaces.
Axios: For making HTTP requests to the backend.
Tailwind CSS: For responsive and easy styling.
Backend
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js: Web framework for Node.js to handle routing and requests.
MongoDB: NoSQL database for storing todos and user information.
JWT (JSON Web Tokens): For secure authentication of users.
Bcrypt: For hashing user passwords securely.
Middleware
isLoggedIn.js: Middleware to verify if the user is authenticated using JWT tokens.
Setup Instructions


Prerequisites

Before you begin, ensure you have the following installed:


Node.js and npm: Install Node.js
MongoDB: If you're not using MongoDB Atlas, ensure MongoDB is set up locally.
Git: Install Git
Backend Setup
Clone the backend repository:
git clone https://github.com/sseeker05
Navigate to the backend folder:
cd backend
Install backend dependencies:
npm install
Create a .env file in the backend root and add your MongoDB URI and other variables:
MONGO_URI=your_mongo_db_connection_string
PASSWORD=your_secret_password
SECRET=your_jwt_secret
Start the backend server:
npm run dev
The server will start on http://localhost:5001.
Frontend Setup
Clone the frontend repository:
git clone https://github.com/sseeker05
Navigate to the frontend folder:
cd frontend
Install frontend dependencies:
npm install
Start the frontend server:
npm run dev
Visit the application in your browser at http://localhost:3000.
Routes
POST /todos - Create a new Todo (requires authentication).
GET /todos - Get all Todos (requires authentication).
PUT /todos/:id - Update a Todo (requires authentication).
DELETE /todos/:id - Delete a Todo (requires authentication).
POST /login - Login and get a JWT token.
Contributing


Fork the project
Create your feature branch (git checkout -b feature/feature-name)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/feature-name)
Create a new Pull Request
