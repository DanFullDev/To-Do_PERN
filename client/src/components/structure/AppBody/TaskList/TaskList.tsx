import TaskCreate from "../TaskCreate/TaskCreate";
import "./TaskList.css";
import { TaskModel } from "../../../../models/taskModel";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TodoService } from "../../../../services/pernQueries";

export default function TaskList(props: any) {
  const [tasksLeft, setNumberOfTasks] = useState<string | number>("0");
  const [currentFilter, setCurrentFilter] = useState<string>("ALL");
  const [taskList, setTaskList] = useState<TaskModel[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");

  //Load All Todos on Initialization
  useEffect(() => {
    loadTodos();
  }, []);

  const reorder = (
    list: TaskModel[],
    startIndex: number,
    endIndex: number
  ): TaskModel[] => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const loadTodos = () => {
    TodoService.getAllTodos()
      .then((res) => {
        const todos = res.data;
        const { rows } = todos.todoData;
        setTaskList(rows);
        setNumberOfTasks(rows.length);
      })
      .catch((error) => console.log(error));
  };

  const deleteTodo = (todoItem: TaskModel) => {};

  const editTodo = (todoItem: TaskModel) => {};

  const filterList = () => {};

  return (
    <>
      <TaskCreate onTaskCreated={loadTodos}></TaskCreate>
      <div className="bg-gray-800 w-full h-96 mt-2 mb-2 rounded-md shadow-lg relative">
        <DragDropContext
          onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) return;
            if (
              source.index === destination.index &&
              source.droppableId === destination.droppableId
            )
              return;
            setTaskList((prevTasks) =>
              reorder(prevTasks, source.index, destination.index)
            );
          }}
        >
          <Droppable droppableId="tasks">
            {(dropableProvided) => (
              <div
                {...dropableProvided.droppableProps}
                ref={dropableProvided.innerRef}
                className=" overflow-y-auto h-72"
              >
                {taskList.map((value: TaskModel, index) => {
                  return (
                    <Draggable
                      key={index}
                      draggableId={value.todo_id + " " + index}
                      index={index}
                    >
                      {(draggableProvider) => (
                        <div
                          {...draggableProvider.draggableProps}
                          {...draggableProvider.dragHandleProps}
                          ref={draggableProvider.innerRef}
                          className="taskDiv"
                        >
                          <button
                            className={
                              selectedValue !== value.todo_id
                                ? "taskButton transform duration-500 ease-in-out hover:scale-110"
                                : "selectedButton transform duration-500 ease-in-out hover:scale-110 "
                            }
                            title="Select this record"
                            onClick={() => {
                              setSelectedValue(value.todo_id);
                            }}
                          ></button>
                          <div className="taskInput">
                            <input
                              value={value.description}
                              onChange={() => {}}
                              className="hover:text-blue-500 cursor-pointer bg-transparent"
                            ></input>
                          </div>
                          {selectedValue === value.todo_id && (
                            <button className="text-purple-200 hover:text-green-500 transform ease-in-out duration-500 hover:scale-110">
                              Complete Task
                            </button>
                          )}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {dropableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="taskFooter">
          <div className="itemNumber">{tasksLeft} items left</div>
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
          <div className="clearItem">Delete Selected</div>
        </div>
      </div>
    </>
  );
}
