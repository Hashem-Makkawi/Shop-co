import React from 'react'

import style from "./Reviews.module.css"

import Stars from "../../Stars/stars"
import approved from "../../../assets/approved.svg"

const Reviews = () => {
  let ReviewsArray = [

  ]

  return (
    <div className={style.section}>
      <div className={style.header}>
        <span className={style.title}>All Reviews <span>{}</span></span>
        <button>Write a Review</button>
      </div>
    </div>
  )
}

export default Reviews
