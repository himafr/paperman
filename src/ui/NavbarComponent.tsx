import {  FaChevronDown, FaSearch } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router";

function NavbarComponent() {
  const navigate=useNavigate();
  return (
    <div className="flex justify-between pt-3 px-14">
      <div className="flex justify-between gap-17 items-center">
        <div className="font-bold text-secondary text-2xl">PAPER.man</div>
<style>
  {`
  #navUl>li{
    display:flex;
    align-items:center;
    gap:3px
    }
    #navUl>li>svg{
    cursor:pointer;
    width:16px;
  }
  `}
</style>
        <ul className="flex gap-9" id="navUl">
          <li>
            <select onChange={(e)=>navigate(e.target.value)} >
              <option  value=""> 
             Categories 
              </option>
              <option  value="/"> 
             Cate 
              </option>
            </select>
          </li>
          <li>
            <NavLink to=""> Pages </NavLink>
            <FaChevronDown color="#3E3232" />
            
          </li>
          <li>
            <NavLink to=""> Contact Us </NavLink>
            <FaChevronDown color="#3E3232" />
          </li>
          <li>
            <NavLink to=""> About Us</NavLink>
            <FaChevronDown color="#3E3232" />
          </li>
        </ul>
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex items-center">
          <input
            type="text"
            className="bg-gray py-3.5 pr-14 pl-5 rounded-xl"
            placeholder="Search AnyThing"
          />

          <FaSearch className="relative right-9 cursor-pointer" />
        </div>
        <div className="flex gap-2.5">
          <div className="flex gap-3.5 items-center">
            <img src="/images/avatar/13.png" className="my-icon " alt="" />
            hema
            <FaChevronDown color="#3E3232" className="cursor-pointer"/>
          </div>
          <div className="flex items-center justify-center bg-gray my-icon cursor-pointer">
                               <FiBookmark size={25}  />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
