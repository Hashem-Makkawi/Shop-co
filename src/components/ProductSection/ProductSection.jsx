import React from 'react'
import style from "./ProductSection.module.css"
import Images from "./Images/Images"
import ColorSelecting from './ColorSelecting/ColorSelecting'
import { useState } from 'react'
import Stars from '../Stars/Stars'
import Pricing from '../Pricing/price'

const ProductSection = ({product}) => {
  let [colorSelected, setColorSelected] = useState(0)



  return (
    <div className={style.productSection}>
      <Images images = {product.colors[colorSelected].images} />
      <div className={style.Details}>
        <h1>{product.title}</h1>
        <Stars rating={product.rating}/>
        <Pricing discount={product.discount} discountPercentage={product.discountPercentage} price={product.price}/>
        <p>{product.description}</p>
        <hr />
        {product.colors.length > 1 &&  <ColorSelecting setColor = {setColorSelected} Colors = {product.colors} />}

      </div>
    </div>
  )
}

export default ProductSection
