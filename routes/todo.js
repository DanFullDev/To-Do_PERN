const express = require("express");
const router = express.Router();

const todoControl = require("../controllers/todoController");

//Get all todos
router.get("/get/all", todoControl.getAllTodos);
router.get("/get/all/active", todoControl.getAllActiveTodos);
router.get("/get/all/complete", todoControl.getAllCompleteTodos);
//Get specific todo
router.get("/get/:taskId", todoControl.getOneTodo);
//Edit one todo
router.post("/edit", todoControl.editTodo);
//Create todo
router.post("/create", todoControl.createTodo);
//Delete one todo
router.delete("/delete/:taskId", todoControl.deleteTodo);

module.exports = router;
