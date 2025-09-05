import React from 'react'
import style from "../pages/Home/Home.module.css"

const benifit = ({innerNumber, innerText}) => {
  return (
        <span className={style.benifit}>
          <span>{innerNumber}</span>
          <span>{innerText}</span>
        </span>
  )
}

export default benifit
