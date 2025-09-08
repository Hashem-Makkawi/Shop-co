import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../../pages/Cart/cartProvider'

import style from "./header.module.css"

import arrowdown from "../../assets/arrowDown.svg"
import search from "../../assets/searchIcon.svg"
import cartIcon from "../../assets/cart.svg"
import profileIcon from "../../assets/profile.svg"
import menu from "../../assets/burger.svg"
import searchMobile from "../../assets/searchIconMobile.svg"
import { useNavigate } from 'react-router-dom'

const header = () => {
  const { totalItems } = useContext(CartContext)

  const navigate = useNavigate()
  return (
    <div className={style.header}>
      <div className={style.logoPart}>
        <img className={style.burgerMenu} src={menu} alt="" />
        <span onClick={() => navigate("/")} className={style.logo}>SHOP.CO</span>
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
      <div className={style.headerIcon}>
        <img className={style.searchIconMobile} src={searchMobile} alt="" />
        {totalItems > 0 && <span className={style.cartItems}>{totalItems}</span>}
        <img onClick={() => navigate("/cart")} src={cartIcon} alt="" />
        <img src={profileIcon} alt="" />
      </div>
   </div>
  )
}

export default header
