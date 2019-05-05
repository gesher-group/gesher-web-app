import React from "react";
import NavBar from "../NavBar/NavBar.js";
import SideDrawer from "../SideDrawer/SideDrawer.js";
import BackDrop from "../Backdrop/Backdrop.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SideDrawer />
      <BackDrop />
    </div>
  );
};

export default App;
