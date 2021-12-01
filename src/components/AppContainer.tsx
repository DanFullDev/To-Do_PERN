import "./AppContainer.css";
import AppBody from "./structure/AppBody/AppBody";
import AppFooter from "./structure/AppFooter/AppFooter";
import AppHeader from "./structure/AppHeader/AppHeader";

export default function AppContainer() {
  return (
    <div className="absolute z-50 ml-auto mr-auto left-0 right-0 text-center p-96">
      <div className="flex flex-col justify-between align-middle">
        <AppHeader></AppHeader>
        <AppBody></AppBody>
        <AppFooter></AppFooter>
      </div>
    </div>
  );
}