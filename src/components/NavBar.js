import React from "react";
import "../stylesheets/NavBar/navbar.css";
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
        <a href="/">Gesher Group Logo</a>
      </div>
      <div className="nav_items">{navItems()}</div>
    </nav>
  </header>
);

export default NavBar;
