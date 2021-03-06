import React from "react";
import "./SideDrawer.css";
import routesData from "../../routes/routes-list.json";

const navItems = () =>
  routesData.routes.map((currentRoute, currentIndex) => (
    <li className="navbar_item" key={currentIndex}>
      <a href={currentRoute.path}>{currentRoute.routeName}</a>
    </li>
  ));

const SideDrawer = props => {
  const drawerClasses = props.show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <nav>
        <div className="side-drawer-title">
          <h1>Gesher Group</h1>
        </div>
        <ul>{navItems()}</ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
