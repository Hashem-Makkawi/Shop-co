import React from 'react'

import style from "./footer.module.css"

import BottomFooter from './BottomFooter/bottomFooter'
import Subscription from "./Subscription/subscription"

const Footer = () => {
  return (
    <section className={style.section}>
        <Subscription />
        <BottomFooter />
    </section>
  )
}

export default Footer
