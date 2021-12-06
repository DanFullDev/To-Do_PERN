export class TaskModel {
  taskId: string;
  task: string;
  status: string;

  constructor(id: string, taskDescription: string, taskStatus: string) {
    this.taskId = id;
    this.task = taskDescription || "";
    this.status = taskStatus || "INCOMPLETE";
  }
}
