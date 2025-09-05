import React from 'react'

import style from "./subscription.module.css"

import Mail from "../../../assets/mail.svg"

const subscription = () => {
  return (
    <div className={style.container}>
      <h2>STAY UPTO DATE ABOUT OUT LATEST OFFERS</h2>
      <div className={style.form}>
        <div className={style.emailInput}>
            <input placeholder='Enter your email address' type="text" />
            <img src={Mail} alt="" />
        </div>
        <button>Subscribe to Newsletter</button>
      </div>
    </div>
  )
}




export default subscription
