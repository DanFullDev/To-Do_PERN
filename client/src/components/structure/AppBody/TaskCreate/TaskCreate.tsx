import { useState } from "react";
import { TodoService } from "../../../../services/pernQueries";
import "./TaskCreate.css";

export default function TaskCreate(props: any) {
  const [todoValue, setTodoValue] = useState<string | any>("");

  const createTodoItem = () => {
    if (!!todoValue) {
      TodoService.createTodo(todoValue).catch((error) => console.log(error));
      props.onTaskCreated();
      setTodoValue("");
    }
  };

  const checkPressedKey = (key: any) => {
    if (key.key === "Enter") {
      TodoService.createTodo(todoValue).catch((error) => console.log(error));
      props.onTaskCreated();
      setTodoValue("");
    }
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
        onClick={() => createTodoItem()}
      >
        +
      </button>
      <input
        value={todoValue}
        onInput={($event: any) => setTodoValue($event.target.value)}
        onKeyDown={(key) => checkPressedKey(key)}
        placeholder="Create a new todo..."
        className="bg-transparent text-2xl
        flex-grow p-3 placeholder-white
        placeholder-opacity-20 text-purple-200"
      ></input>
    </div>
  );
}
