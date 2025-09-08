import React from 'react'

import style from "./sizeSelecting.module.css"
import { useState } from 'react'

const sizeSelecting = () => {
    let [clicked, setClicked] = useState(null)

    let sizes = ["Small", "Medium", "Large", "X-Large"]

  return (
    <div className={style.container}>
        <span className={style.title}>Choose Size</span>
        <div className={style.buttons} >
            {sizes.map((size, index) => {
                return <button key={index} onClick={() => setClicked(index)} className={`${style.button} ${clicked === index ? style.clicked : ""} ` }>{size}</button>
            })}
        </div>
    </div>
  )
}

export default sizeSelecting
