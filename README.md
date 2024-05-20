# Recycloset - Backend

## Project Overview

This project is the backend API for a second-hand clothing store, built using Express.js and MongoDB. It provides endpoints for user authentication, product management, and more, ensuring secure and efficient data handling.

## Features

- RESTful API using Express.js.
- User authentication with JWT.
- Authorization to restrict certain actions to admin users.
- CRUD operations for product management.
- Secure storage of user data in MongoDB.
- Server-side validations using Joi.
- HTTP request logging with Morgan.

## Project Structure

The project is divided into modules to keep the code clean and readable:

- **models/**: Mongoose models for data schemas.
- **routes/**: Route handlers for API endpoints.
- **controllers/**: Logic for handling requests and responses.
- **middleware/**: Authentication and authorization middleware.
- **service/**: Utility functions and custom logger.

## Installation

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies: `npm install`
4. Create a `.env` file for environment variables:
   PORT=3030
   TOKEN_PRIVATE_KEY="safdsf32324sfsdf3"
   MONGODB_CON_STR="mongodb://127.0.0.1:27017/bizDB"

5. Start the development server: `npm start`

## Technology Stack

- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure authentication.
- **Joi**: For input validation.
- **Morgan**: HTTP request logger.

## API Endpoints

- **/api/auth/**: Endpoints for user authentication and registration.
- **/api/items/**: Endpoints for product CRUD operations.
- **/api/users/**: Endpoints for user management (admin only).

## Code Quality

- Logical and readable code structure.
- Proper use of comments for complex functions.
- Robust error handling with try-catch blocks and meaningful error messages.
- Secure handling of sensitive data.

## Deployment

Ensure the backend is connected to the MongoDB database and the frontend is configured to communicate with the backend API.
