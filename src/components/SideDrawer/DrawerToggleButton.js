import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = () => {
  return (
    <div>
      <button className="toggle-button">
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  );
};

export default DrawerToggleButton;
