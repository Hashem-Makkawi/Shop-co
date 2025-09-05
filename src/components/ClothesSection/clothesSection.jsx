import React from 'react'
import style from "./clothesSection.module.css"
import Piece from "../../components/ClothesPiece/piece"

import {Link} from "react-router-dom"


const ClothesSection = ({Heading, array}) => {

    

  return (
    <div className={style.section}>
      <h2>{Heading}</h2>
      <div className={style.clothes}>
        {array.map((piece, index) => {
            return (
                <Link>
               < Piece url = {piece.url}
                       title={piece.title}
                       rating = {piece.rating}
                       price = {piece.price}
                       discount={piece.discount}
                       discountPercentage={piece.discountPercentage}
                       key = {index} />
                </Link>
            )
        })}
      </div>
      <div className={style.buttonContainer}>
      <button className={style.button} >View All</button>
      </div>
      
    </div>
  )
}

export default ClothesSection
