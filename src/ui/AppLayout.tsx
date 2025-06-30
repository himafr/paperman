import { Outlet } from "react-router"
import NavbarComponent from "./NavbarComponent"
import FooterComponent from "./FooterComponent"

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
