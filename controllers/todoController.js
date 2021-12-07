const todoModel = require("../models/todo");

module.exports = {
  getAllTodos(req, res, next) {
    todoModel
      .loadAll()
      .then((data) => res.status(200).json({ success: true, todoData: data }))
      .catch((error) => res.status(400).json({ error }));
  },
  getOneTodo(req, res, next) {
    todoModel
      .loadOne(req.params.taskId)
      .then((data) => res.status(200).json({ sucess: true, todo: data }))
      .catch((error) => res.status(400).json({ error }));
  },
  editTodo(req, res, next) {
    const { description, status, todo_id } = req.body;
    todoModel
      .editOne(description, status, todo_id)
      .then((data) =>
        res.status(200).json({ success: true, message: "Todo task updated!" })
      )
      .catch((error) => res.status(400).json({ error }));
  },
  createTodo(req, res, next) {
    const { description, status } = req.body;
    todoModel
      .createOne(description, status)
      .then((data) =>
        res
          .status(200)
          .json({ success: true, msg: "Task successfully created!" })
      )
      .catch((error) => res.status(400).json({ error }));
  },
  deleteTodo(req, res, next) {
    todoModel
      .deleteOne(req.params.taskId)
      .then((data) =>
        res.status(200).json({ success: true, message: "Task deleted!" })
      )
      .catch((error) => res.status(400).json({ error }));
  },
};
