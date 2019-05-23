import React from "react";
import "./HeroeImageSmall.css";
import heroeImage from "../../img/header-image.jpg";

const HeroeImageSmall = () => {
  return <div className="heroe-image-small"><img src={heroeImage}></img></div>;
};

export default HeroeImageSmall;
