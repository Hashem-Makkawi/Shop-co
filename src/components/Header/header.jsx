import React from 'react'
import {Link} from "react-router-dom"

import style from "./header.module.css"

import arrowdown from "../../assets/arrowDown.svg"
import search from "../../assets/searchIcon.svg"
import cartIcon from "../../assets/cart.svg"
import profileIcon from "../../assets/profile.svg"
import menu from "../../assets/burger.svg"
import searchMobile from "../../assets/searchIconMobile.svg"

const header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoPart}>
        <img className={style.burgerMenu} src={menu} alt="" />
        <span className={style.logo}>SHOP.CO</span>
      </div>
      <nav className={style.navbar}>
        <Link className={style.navLink}>Shop<img src={arrowdown} alt="" /></Link>
        <Link className={style.navLink}>On Sale</Link>
        <Link className={style.navLink}>New Arrivals</Link>
        <Link className={style.navLink}>Brands</Link>
      </nav>
      <div className={style.searchBar}>
        <input placeholder='Search for products...' type="text" />
        <img src={search} alt="" />
      </div>
      <span className={style.headerIcon}>
        <img className={style.searchIconMobile} src={searchMobile} alt="" />
        <Link><img src={cartIcon} alt="" /></Link>
        <Link><img src={profileIcon} alt="" /></Link>
      </span>
    </div>
  )
}

export default header
