import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import SideDrawer from "../SideDrawer/SideDrawer.js";
import BackDrop from "../Backdrop/Backdrop.js";
import Footer from "../Footer/Footer.js";

export default class Menu extends Component {
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
      <div className="Menu">
        <NavBar drawerClickHandler={this.drawerToggleClickHAndler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Footer />
        {backDrop}
      </div>
    );
  }
}
