import "./TaskList.css";
import { TaskModel } from "../../../../../models/taskModel";
import { useEffect, useState } from "react";

export default function TaskList() {
  const [tasksLeft, setNumberOfTasks] = useState<string | number>("0");
  const [currentFilter, setCurrentFilter] = useState<string>("ALL");
  const [taskList, setTaskList] = useState<TaskModel[]>();

  //Get the list of tasks here
  useEffect(() => {
    setTaskList([]);
    setNumberOfTasks("0");
  }, []);

  return (
    <div className="bg-gray-800 w-full h-96 mt-2 mb-2 rounded-md shadow-lg p-5 relative">
      {taskList?.forEach((fetchedTask: TaskModel) => {
        return (
          <div>
            <div>{fetchedTask.task}</div>
          </div>
        );
      })}
      <div
        className="flex flex-row
      justify-between align-middle text-white
      text-opacity-20 font-semibold text-lg absolute
      inset-x-0 bottom-0 m-8"
      >
        <div>{tasksLeft} items left</div>
        <div className="flex flex-row justify-between align-middle items-center space-x-8 ml-10">
          <div
            onClick={() => setCurrentFilter("ALL")}
            className={
              currentFilter === "ALL"
                ? "bottomItems text-blue-600"
                : "bottomItems"
            }
          >
            All
          </div>
          <div
            onClick={() => setCurrentFilter("ACTIVE")}
            className={
              currentFilter === "ACTIVE"
                ? "bottomItems text-blue-600"
                : "bottomItems"
            }
          >
            Active
          </div>
          <div
            onClick={() => setCurrentFilter("COMPLETED")}
            className={
              currentFilter === "COMPLETED"
                ? "bottomItems text-blue-600"
                : "bottomItems"
            }
          >
            Completed
          </div>
        </div>
        <div className="bottomItems">Clear Completed</div>
      </div>
    </div>
  );
}
