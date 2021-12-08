import "./AppContainer.css";
import TaskList from "./structure/AppBody/TaskList/TaskList";
import AppFooter from "./structure/AppFooter/AppFooter";
import AppHeader from "./structure/AppHeader/AppHeader";

export default function AppContainer() {
  return (
    <div className="h-80 bg-gradient-to-r from-blue-900 to-pink-900">
      <div className="absolute z-50 ml-auto mr-auto left-0 right-0 text-center pt-1 pb-0 sm:p-20 sm:pt-12 sm:pb-0 xl:p-96 xl:pt-12 xl:pb-0">
        <div className="flex flex-col justify-between align-middle">
          <AppHeader></AppHeader>
          <TaskList></TaskList>
          <AppFooter></AppFooter>
        </div>
      </div>
    </div>
  );
}
