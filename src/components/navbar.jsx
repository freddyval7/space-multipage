import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-12 py-5">
      <div>
        <img className="w-8 h-8" src={logo} alt="logo" />
      </div>
      <div className="hidden md:flex gap-12 p-8 my-4 backdrop-blur-lg">
        <NavLink
          className={({ isActive }) => (isActive ? "text-black" : "")}
          to="/"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold">00</span>
            <span className="uppercase">Home</span>
          </div>
        </NavLink>
        <NavLink to="/destination">
          <div className="flex items-center gap-2">
            <span className="font-bold">01</span>
            <span className="uppercase">Destination</span>
          </div>
        </NavLink>
        <NavLink to="/crew">
          <div className="flex items-center gap-2">
            <span className="font-bold">02</span>
            <span className="uppercase">Crew</span>
          </div>
        </NavLink>
        <NavLink to="/technology">
          <div className="flex items-center gap-2">
            <span className="font-bold">03</span>
            <span className="uppercase">Technology</span>
          </div>
        </NavLink>
      </div>
      <div className="md:hidden">
        <img className="w-6 h-6" src={menu} alt="menu" />
      </div>
    </div>
  );
}
