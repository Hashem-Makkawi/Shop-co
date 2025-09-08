import React from 'react'
import style from "./stars.module.css"

import yellowStar from "../../assets/yellowStar.svg"
import grayStar from "../../assets/grayStar.svg"

const stars = ({rating, size}) => {
  return (
    <span className={`${style.generalRating} ${style[size]}`}>

        <div className={`${style.stars} ${style[size]}`}>

        {Array.from({length : 5} , (_, index) => {
            return(
            <img key={index} src={index < Math.floor(rating) ? yellowStar : grayStar} alt="" />
            )
        })} 
        </div>
        <span className={`${style.rating} ${style[size]} `}>{rating}/<span className={style.five}>5</span></span>
    </span>
  )
}

export default stars
