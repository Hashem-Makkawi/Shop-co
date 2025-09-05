import React from 'react'
import StarsIcons from "../Stars/stars"
import PricingLabel from "../Pricing/price"

import style from "./piece.module.css"


const Piece = ({url, title, rating, price, discount, discountPercentage}) => {

  return (
    
        <div className={style.piece}>
        <img className={style.image} src={url} alt="" />
        <h4 className={style.title}>{title}</h4>
        <StarsIcons rating = {rating} />
        <PricingLabel price = {price} discount={discount} discountPercentage={discountPercentage}/>
        </div>
    
  )
}

export default Piece
