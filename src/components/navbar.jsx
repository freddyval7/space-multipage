import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center px-12 py-5">
      <div>
        <img className="w-8 h-8" src={logo} alt="logo" />
      </div>
      <div className="hidden md:flex gap-12 p-8 my-4 backdrop-blur-lg">
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-2 pb-2 border-white"
          }
          to="/"
        >
          <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
            <span className="font-bold">00</span>
            <span className="uppercase">Home</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-2 pb-2 border-white"
          }
          to="/destination"
        >
          <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
            <span className="font-bold">01</span>
            <span className="uppercase">Destination</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-2 pb-2 border-white"
          }
          to="/crew"
        >
          <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
            <span className="font-bold">02</span>
            <span className="uppercase">Crew</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-2 pb-2 border-white"
          }
          to="/technology"
        >
          <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
            <span className="font-bold">03</span>
            <span className="uppercase">Technology</span>
          </div>
        </NavLink>
      </div>
      <div className="md:hidden">
        <img onClick={toggleMenu} className="w-6 h-6" src={menu} alt="menu" />
        <div
          className={`flex flex-col gap-8 p-8 bg-slate-900 ${
            isOpen ? "block" : "hidden"
          } right-0 top-0 absolute h-screen w-[200px]`}
        >
          <div className="flex justify-end">
            <img
              onClick={toggleMenu}
              className="w-6 h-6"
              src={close}
              alt="close"
            />
          </div>
          <NavLink
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? "text-black" : "")}
            to="/"
          >
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
              <span className="font-bold">00</span>
              <span className="uppercase">Home</span>
            </div>
          </NavLink>
          <NavLink onClick={toggleMenu} to="/destination">
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
              <span className="font-bold">01</span>
              <span className="uppercase">Destination</span>
            </div>
          </NavLink>
          <NavLink onClick={toggleMenu} to="/crew">
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
              <span className="font-bold">02</span>
              <span className="uppercase">Crew</span>
            </div>
          </NavLink>
          <NavLink onClick={toggleMenu} to="/technology">
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
              <span className="font-bold">03</span>
              <span className="uppercase">Technology</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
