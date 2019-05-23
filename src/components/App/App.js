import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import SideDrawer from "../SideDrawer/SideDrawer.js";
import BackDrop from "../Backdrop/Backdrop.js";
import HeroeImageSmall from "../HeroeImageSmall/HeroeImageSmall.js";
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
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop backDropClickHandler={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <NavBar drawerClickHandler={this.drawerToggleClickHAndler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <HeroeImageSmall />
        {backDrop}
      </div>
    );
  }
}
