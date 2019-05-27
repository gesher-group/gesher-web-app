import React from "react";
import Menu from "../Menu/Menu";

import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Menu />

      <div className="page-content-header">
        <h1>Our Services</h1>
      </div>

      <div className="services-section">
        <div className="gesher-service">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="gesher-service">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="gesher-service">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
