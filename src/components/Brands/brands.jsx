import React from 'react'
import style from "./brands.module.css"
import zara from "../../assets/brandsImages/zara.svg"
import versage from "../../assets/brandsImages/versage.svg"
import gucci from "../../assets/brandsImages/gucci.svg"
import prada from "../../assets/brandsImages/prada.svg"
import calvinKlein from "../../assets/brandsImages/calvinKlein.svg"

const brands = () => {
  return (
    <div className={style.brandsSection}>
      <img src={versage} alt="" />
      <img src={zara} alt="" />
      <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calvinKlein} alt="" />
    </div>
  )
}

export default brands
