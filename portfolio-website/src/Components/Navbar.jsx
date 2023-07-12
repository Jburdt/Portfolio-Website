import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div
      style={{ backgroundColor: "#5271ff" }}
      className="fixed w-full h-[80px] flex justify-between items-center px-4"
    >
      <div>
        <img src={logo} alt="Logo" style={{ width: "70px" }} />
      </div>
    </div>
  );
};

export default Navbar;
