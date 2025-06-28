import { Outlet } from "react-router"
import NavbarComponent from "../components/shared/NavbarComponent"
import FooterComponent from "../components/shared/FooterComponent"

function AppLayout() {
    return (
        <div className=" text-black">
<NavbarComponent />
<Outlet />
<FooterComponent />
        </div>
    )
}

export default AppLayout
