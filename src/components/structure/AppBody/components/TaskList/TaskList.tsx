import "./TaskList.css";

export default function TaskList() {
  let tasksLeft: string | number = "0";
  let currentFilter: string = "ALL";

  return (
    <div className="bg-gray-800 w-full h-96 mt-2 mb-2 rounded-md shadow-lg p-5 relative">
      <div></div>
      <div
        className="flex flex-row
      justify-between align-middle text-white
      text-opacity-20 font-semibold text-lg absolute
      inset-x-0 bottom-0 m-8"
      >
        <div>{tasksLeft} items left</div>
        <div className="flex flex-row justify-between align-middle items-center space-x-8 ml-10">
          <div className="bottomItems">All</div>
          <div className="bottomItems">Active</div>
          <div className="bottomItems">Completed</div>
        </div>
        <div className="bottomItems">Clear Completed</div>
      </div>
    </div>
  );
}
