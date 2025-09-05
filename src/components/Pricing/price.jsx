import React from 'react'
import style from "./price.module.css"

const price = ({discount, discountPercentage, price}) => {
  return (
    <div className={style.total}>
      <span className={style.price}>${discount ? price - discountPercentage*price/100  : price}</span>
      {discount && (
        <>
        <span  className={style.oldPrice}>{discount ? "$" + price : ""}</span>
        <span className={style.discountAmount}>{discount ? "-" + discountPercentage + "%": ""}</span></>
      )}
    </div>
  )
}

export default price
