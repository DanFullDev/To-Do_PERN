import "./AppContainer.css"
import AppBody from "./structure/AppBody/AppBody"
import AppFooter from "./structure/AppFooter/AppFooter"
import AppHeader from "./structure/AppHeader/AppHeader"

export default function AppContainer() {
    return (
        <div className="absolute z-50 flex flex-col justify-center align-middle">
            <AppHeader></AppHeader>
            <AppBody></AppBody>
            <AppFooter></AppFooter>
        </div>
    )
}
