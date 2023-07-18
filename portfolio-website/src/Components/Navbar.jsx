import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"
      // style={{
      //   backgroundColor: "#5271ff",
      //   position: "fixed",
      //   width: "100%",
      //   height: "80px",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   paddingLeft: "16px",
      //   paddingRight: "16px",
      // }}
    >
      <div>
        <img src={logo} alt="Logo" style={{ width: "80px" }} />
      </div>

      {/*Menu*/}
      <ul style={{ display:'none', minWidth: "md:flex" }} >

        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/*Hamburger*/}
      <div style={{ display:'hidden' }} >
        <FaBars />
      </div>

      {/*Mobile Menu*/}
      <div style={{ display:"none" }} >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Social Icons*/}
      <div style={{ display:"none" }} ></div>
    </div>
  );
};

export default Navbar;
