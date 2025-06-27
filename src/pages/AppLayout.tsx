import { Outlet } from "react-router"
import NavbarComponent from "../components/shared/NavbarComponent"

function AppLayout() {
    return (
        <div className="px-14">
<NavbarComponent />
<Outlet />
        </div>
    )
}

export default AppLayout
