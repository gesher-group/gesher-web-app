import React from "react";
import "./HeroeImageSmall.css";
import heroeImage from "../../img/header-image.jpg";

const HeroeImageSmall = (props) => {
  return (
    <div className="heroe-image-small">
      <h1>{props.imageText}</h1>
      <img src={heroeImage} />
    </div>
  );
  //   return <div className="heroe-image-small">GESHERRRR!</div>;
};

export default HeroeImageSmall;
