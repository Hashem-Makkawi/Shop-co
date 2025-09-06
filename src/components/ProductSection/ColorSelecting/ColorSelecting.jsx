import React from 'react'
import style from "./ColorSelecting.module.css"
import { useState } from 'react'


const ColorSelecting = ({setColor, Colors}) => {
    let [selected, setSelected] = useState(0)


  return (
    <>
    <span className={style.title}>Select Colors</span>
    <div className={style.swatches}>
      {Colors.map((color, index) => {
        return (
            <div onClick={() => {
                setColor(index)
                setSelected(index)
            }} key={index} className={`${style.swatch} ${selected === index ? style.selected : ""} `} style={{backgroundColor: color.hex}}>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default ColorSelecting
