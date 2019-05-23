import React from "react";
import "./Footer.css";
import logo from "../../img/GesherFooterLogo.svg";

const Footer = props => (
  <footer className="footer">
    <div className="footer_contents">
      <img src={logo} alt="Gesher Logo Small" />
      <a> | Gesher Group 2019 | team@geshergroup.org | legal</a>
    </div>
  </footer>
);

export default Footer;
