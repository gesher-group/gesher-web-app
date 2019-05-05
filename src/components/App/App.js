import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import SideDrawer from "../SideDrawer/SideDrawer.js";
import BackDrop from "../Backdrop/Backdrop.js";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHAndler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop backDropClickHandler={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <NavBar drawerClickHandler={this.drawerToggleClickHAndler} />
        {sideDrawer}
        {backDrop}
      </div>
    );
  }
}
