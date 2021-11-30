export class taskModel {
  name: string;
  task: string;
  status: string;

  constructor(taskName: string, taskDescription: string, taskStatus: string) {
    this.name = taskName;
    this.task = taskDescription;
    this.status = taskStatus;
  }
}
