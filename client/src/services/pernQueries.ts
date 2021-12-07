import axios from "axios";

export const TodoService = {
  getAllTodos() {
    return axios.get("/todo/get/all");
  },
  getOneTodo(todoId: string) {
    return axios.get("/todo/get/" + todoId);
  },
  editTodo(todoDescription: string, todoStatus: string, todoId: string) {
    let todoBody = {
      todo_id: todoId,
      description: todoDescription,
      status: todoStatus,
    };
    return axios.post("/todo/edit", todoBody);
  },
  createTodo(todoDescription: string) {
    let todoBody = {
      description: todoDescription,
      status: "INCOMPLETE",
    };
    return axios.post("/todo/create", todoBody);
  },
  deleteTodo(todoId: string) {
    return axios.delete("/todo/delete/" + todoId);
  },
};
