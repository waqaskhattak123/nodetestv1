const Todo = require("../models/Todo");

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get a single todo
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found"
      });
    }
    
    res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    
    res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found"
      });
    }
    
    res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found"
      });
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 