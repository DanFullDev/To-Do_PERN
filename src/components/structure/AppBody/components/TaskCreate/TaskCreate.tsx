import { useState } from "react";
import "./TaskCreate.css";

export default function TaskCreate() {
  const [todoValue, setTodoValue] = useState<string | any>();

  const changeTodoValue = () => {
    //Will call API to save this task and add it to the current task list
    console.log(todoValue);
  };

  return (
    <div
      className="bg-gray-800 w-full h-24 mt-5 mb-5
      rounded-md shadow-lg p-5
      flex flex-row align-middle
    text-white justify-center"
    >
      <button
        className="border-solid border-gray-700 border-2
        flex items-center justify-center
        rounded-full h-10 w-10 mr-2 self-center transform duration-500
        ease-in-out hover:scale-110 hover:text-blue-700"
        title="Create new todo"
        onClick={() => changeTodoValue()}
      >
        +
      </button>
      <input
        onInput={($event: any) => setTodoValue($event.target.value)}
        placeholder="Create a new todo..."
        className="bg-transparent text-3xl flex-grow p-3 placeholder-white placeholder-opacity-20 text-purple-200"
      ></input>
    </div>
  );
}
