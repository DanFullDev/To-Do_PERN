import "./TaskCreate.css";

export default function TaskCreate() {
  let todoValue: string | any;

  const changeTodoValue = (event: any) => {
    //Will call API to save this task and add it to the current task list
    console.log(event);
  };

  const changeOnInput = (event: any) => {
    todoValue = event.target.value;
  };

  return (
    <div
      className="bg-gray-800 w-full h-24 mt-5 mb-5
      rounded-md cursor-pointer shadow-lg p-5
      flex flex-row align-middle
    text-white justify-center"
    >
      <button
        className="border-solid border-gray-700 border-2
        flex items-center justify-center
        rounded-full h-10 w-10 mr-2 self-center transform duration-500
        ease-in-out hover:scale-110 hover:text-blue-700"
        title="Create new todo"
        onClick={($event) => changeTodoValue($event)}
      >
        +
      </button>
      <input
        onInput={(value: any) => changeOnInput(value)}
        placeholder="Create a new todo..."
        className="bg-transparent text-xl flex-grow p-3 placeholder-white placeholder-opacity-20"
      ></input>
    </div>
  );
}
