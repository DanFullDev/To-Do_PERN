export class TaskModel {
  todo_id: string;
  description: string;
  status: string;

  constructor(id: string, taskDescription: string, taskStatus: string) {
    this.todo_id = id;
    this.description = taskDescription || "";
    this.status = taskStatus || "INCOMPLETE";
  }
}
