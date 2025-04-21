const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Get all todos and create a new todo
router.route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

// Get, update, and delete a specific todo by ID
router.route("/:id")
  .get(todoController.getTodoById)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router; 