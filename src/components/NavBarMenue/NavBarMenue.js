import React from "react";
import "./NavBarMenue.css";
import routesData from "../../routes/routes-list.json";

const navItems = () =>
  routesData.routes.map((currentRoute, currentIndex) => (
    <li className="navbar_item" key={currentIndex}>
      <a href={currentRoute.path}>{currentRoute.routeName}</a>
    </li>
  ));

function NavBarMenue() {
  return (
    <div className="nav_items">
      <ul>{navItems()}</ul>
    </div>
  );
}

export default NavBarMenue;
