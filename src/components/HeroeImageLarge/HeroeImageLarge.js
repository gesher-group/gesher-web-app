import React from "react";
import "./HeroeImageLarge.css";
import heroeImage from "../../img/LargeHeroeImage.jpg";

const HeroeImageLarge = (props) => {
  return (
    <div className="heroe-image-large">
      <h1>{props.imageText}</h1>
      <img src={heroeImage} />
    </div>
  );
};

export default HeroeImageLarge;
