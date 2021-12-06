import "./AppHeader.css";
import TaskButton from "../../../common/TaskButton/TaskButton";

export default function AppHeader() {
  return (
    <div className="flex flex-row justify-between align-middle text-6xl text-white font-bold mt-8 mb-8">
      <div className="transform duration-500 ease-in-out hover:scale-110 cursor-pointer">
        T O D O
      </div>
      <TaskButton></TaskButton>
    </div>
  );
}
