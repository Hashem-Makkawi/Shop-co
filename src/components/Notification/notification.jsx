import React from 'react'
import {Link} from "react-router-dom"
import removeSVG from "../../assets/remove.svg"
import { useState } from 'react'
import styling from "./notification.module.css"

const notification = () => {


    let [popupHide , setPopupHide] = useState("")
    function change(){
        setPopupHide("none")
    }

    let style = {
        display : popupHide
    }

  return (
    <div style={style} className={styling.notification}>
      <span>Sign up and get 20% off to your first order. <Link className={styling.signUp}>Sign Up Now</Link></span>
      <img onClick={change}  src={removeSVG} alt="" />
    </div>
  )
}

export default notification
