const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");




// GET all todos
router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// ADD todo
// POST
router.post("/", async (req, res) => {
    try {
        const { title, priority } = req.body;
        
        const newTodo = new Todo({ title, priority });
        const savedTodo = await newTodo.save();
        
        res.json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// DELETE todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

// UPDATE / CHECK todo
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

module.exports = router;