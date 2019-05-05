import React from "react";
import "./NavBar.css";
import logo from "../../img/GesherNavLogo.svg";
import NavBarMenue from "../NavBarMenue/NavBarMenue";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";

const NavBar = () => (
  <header className="navbar">
    <nav className="navbar_content">
      <div className="hamburger_icon">
        <DrawerToggleButton />
      </div>
      <div className="navbar_logo">
        <img src={logo} alt="Gesher Logo" />
      </div>
      <div className="spacer" />
      <NavBarMenue />
    </nav>
  </header>
);

export default NavBar;
