import "./AppBody.css";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import TaskList from "./components/TaskList/TaskList";

export default function AppBody() {
  return (
    <>
      <TaskCreate></TaskCreate>
      <TaskList></TaskList>
    </>
  );
}
