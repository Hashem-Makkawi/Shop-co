import React from 'react'
import style from "./Images.module.css"
import { useState } from 'react'


const Images = ({images}) => {
    let [indexSelected, setIndexSelected] = useState(0)

  return (
    <div className = {style.container}>
      <div className={style.sideImages}>
        {images.map((img, index) => {
            return (
                <img onClick={() => setIndexSelected(index)} className={style.sideImage} key={index} src={img} alt="" />
            )
        })}
      </div>
      <img className={style.focusedImage} src={images[indexSelected]} alt="" />
    </div>
  )
}

export default Images
