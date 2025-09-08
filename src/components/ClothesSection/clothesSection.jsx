import React from "react";
import style from "./clothesSection.module.css";
import Piece from "../../components/ClothesPiece/piece";

import { Link } from "react-router-dom";

const ClothesSection = ({ Heading, array }) => {
  return (
    <div className={style.section}>
      <h2>{Heading}</h2>
      <div className={style.container}>
        <div className={style.clothes}>
          {array.map((piece, index) => {
            return <Piece key={index} productInfo={piece} />;
          })}
        </div>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>View All</button>
      </div>
    </div>
  );
};

export default ClothesSection;
