import React from "react";
import "./HeroeImageSmall.css";
import heroeImage from "../../img/header-image.jpg";

const HeroeImageSmall = () => {
  return (
    <div className="heroe-image-small">
      <img src={heroeImage} />
    </div>
  );
  //   return <div className="heroe-image-small">GESHERRRR!</div>;
};

export default HeroeImageSmall;
