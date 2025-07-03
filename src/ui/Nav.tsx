import { useLocation } from "react-router";

function Nav() {
    const location =useLocation();
    const currentUrl=location.pathname.split("/").filter(Boolean);
    console.log(currentUrl)
  return <div className="px-12">
{    currentUrl.map(el => <p>{el}</p>)}
  </div>;
}

export default Nav;
