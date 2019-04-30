import React from "react";
import "../stylesheets/NavBar/navbar.css";
import routesData from "../routes/routes-list.json";

const navItems = () =>
  routesData.routes.map((currentRoute, currentIndex) => (
    <li className="navbar-item" key={currentIndex}>
      <a href={currentRoute.path}>{currentRoute.routeName}</a>
    </li>
  ));

const NavBar = () => (
  <header className="NavBar">
    <nav>
      <div className="hamburger-icon" />
      <div>
        <a href="/">Gesher Group Logo</a>
      </div>
      <div className="nav-items">{navItems()}</div>
    </nav>
  </header>
);

export default NavBar;
