import "./AppHeader.css";
import TaskButton from "../../../common/TaskButton/TaskButton";

export default function AppHeader() {
  return (
    <div className="flex flex-row justify-between align-middle text-6xl text-white">
      <div>TODO</div>
      <TaskButton></TaskButton>
    </div>
  );
}
