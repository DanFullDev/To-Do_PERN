import "./TaskList.css";
import { TaskModel } from "../../../../../models/taskModel";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TaskList() {
  const [tasksLeft, setNumberOfTasks] = useState<string | number>("0");
  const [currentFilter, setCurrentFilter] = useState<string>("ALL");
  const [taskList, setTaskList] = useState<TaskModel[]>([
    { task: "Example task", taskId: "0", status: "INCOMPLETE" },
    { task: "Exmp2", taskId: "1", status: "INCOMPLETE" },
    { task: "Exmp3", taskId: "2", status: "INCOMPLETE" },
    { task: "Exmp4", taskId: "3", status: "INCOMPLETE" },
  ]);

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

  return (
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
                    draggableId={value.taskId + " " + index}
                    index={index}
                  >
                    {(draggableProvider) => (
                      <div
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                        ref={draggableProvider.innerRef}
                        className="bg-gray-800 w-full h-24 
              border-b-4 border-gray-600
              border-opacity-25 cursor-pointer
              flex flex-row align-middle justify-center
              items-center text-left p-5"
                      >
                        <button
                          className="border-solid border-gray-700 border-2
                flex items-center justify-center
                rounded-full h-10 w-10 mr-2 self-center transform duration-500
                ease-in-out hover:scale-110"
                          title={value.status}
                        ></button>
                        <div
                          className="bg-transparent text-2xl
                flex-grow p-3 placeholder-white
                placeholder-opacity-20 text-purple-200"
                        >
                          <span className="hover:text-blue-500 cursor-pointer">
                            {value.task}
                          </span>
                        </div>
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
      <div
        className="flex flex-row
      justify-between align-middle text-white
      text-opacity-20 font-semibold text-lg absolute
      inset-x-0 bottom-0 m-8"
      >
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
        <div className="clearItem">Clear Completed</div>
      </div>
    </div>
  );
}
