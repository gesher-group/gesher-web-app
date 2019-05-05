import React from "react";
import "../stylesheets/NavBar/navbar.css";
import logo from "../img/GesherNavLogo.svg";
import routesData from "../routes/routes-list.json";

const navItems = () =>
  routesData.routes.map((currentRoute, currentIndex) => (
    <li className="navbar_item" key={currentIndex}>
      <a href={currentRoute.path}>{currentRoute.routeName}</a>
    </li>
  ));

const NavBar = () => (
  <header className="navbar">
    <nav className="navbar_content">
      <div className="hamburger_icon" />
      <div className="navbar_logo">
        <img src={logo} alt="Gesher Logo" />
      </div>
      <div className="spacer" />
      <div className="nav_items">
        <ul>{navItems()}</ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
