import React from "react";
import "./NavBar.css";
import logo from "../../img/GesherNavLogo.svg";
import NavBarMenue from "../NavBarMenue/NavBarMenue";

const NavBar = () => (
  <header className="navbar">
    <nav className="navbar_content">
      <div className="hamburger_icon" />
      <div className="navbar_logo">
        <img src={logo} alt="Gesher Logo" />
      </div>
      <div className="spacer" />
      <NavBarMenue />
    </nav>
  </header>
);

export default NavBar;
