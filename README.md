# Todo API - Node.js, Express, and MongoDB

A simple CRUD API for managing todo items.

## Features

- Create, read, update, and delete todos
- MongoDB database integration
- RESTful API design

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Deployment Instructions for Railway

1. **Create a Railway account**
   - Sign up at [Railway](https://railway.app/)

2. **Initialize a new project**
   - Click "New Project" and select "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository

3. **Set up environment variables**
   - In your Railway project dashboard, go to the "Variables" tab
   - Add the following variables:
     - `MONGODB_URI` - Your MongoDB connection string
     - `PORT` - Set to 3000 (Railway will automatically use its own PORT)

4. **Deploy**
   - Railway will automatically deploy your application
   - You can monitor the deployment in the "Deployments" tab

## Running Locally

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Run `npm start`

## Project Structure

```
├── controllers/       # Route controllers
│   └── todoController.js
├── models/            # Database models
│   └── Todo.js
├── routes/            # API routes
│   └── todoRoutes.js
├── .env               # Environment variables
├── index.js           # Application entry point
└── package.json       # Project dependencies
``` 