import "./TaskCreate.css";

export default function TaskCreate() {
  return (
    <div
      className="bg-gray-800 w-full h-24 mt-5 mb-5
      rounded-md cursor-pointer shadow-lg p-5
      flex flex-row align-middle
    text-white justify-center"
    >
      <button
        className="border-solid border-gray-700 border-2 
        rounded-full h-10 w-10 mr-2 self-center"
        title="Create new todo"
      >
        +
      </button>
      <input
        placeholder="Create a new todo..."
        className="bg-transparent text-xl flex-grow p-3 placeholder-white placeholder-opacity-20"
      ></input>
    </div>
  );
}
