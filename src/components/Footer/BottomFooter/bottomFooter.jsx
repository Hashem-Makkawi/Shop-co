import React from 'react'

import style from "./bottomFooter.module.css"

const BottomFooter = () => {

    const Component =({heading, first, second, third, fourth}) => {
        return(

        <div className={style.footerComponent}>
                <span className={style.heading}>{heading}</span>
                <span>{first}</span>
                <span>{second}</span>
                <span>{third}</span>
                <span>{fourth}</span>
        </div>
        )
}

  return (
    <div className={style.container}>
        <div className={style.gridContainer}>
            <div className={style.footerComponent}>
                <span className={style.logo}>SHOP.CO</span>
                <p>We have clothes that suits your style and which you're proud to wear. From women to men</p>
                <div className={style.socials}>
                    <i class='bx bxl-instagram'></i>
                    <i class='bx bxl-facebook' ></i>
                    <i class='bx bxl-twitter' ></i>
                    <i class='bx bxl-github' ></i>
                </div>
            </div>
            <Component heading = "COMPANY"
                       first = "About"
                       second = "Features"
                       third = "Works" 
                       fourth = "Career"/>
                       
            <Component heading = "HELP"
                       first = "Customer Support"
                       second = "Delivery Details"
                       third = "Terms & Conditions" 
                       fourth = "Privacy"/>

            <Component heading = "FAQ"
                       first = "Account"
                       second = "Manage Deliveries"
                       third = "Orders" 
                       fourth = "Payments"/>
                       
            <Component heading = "RESOURCES"
                       first = "Free eBooks"
                       second = "Development Turtorial"
                       third = "How to - Blog" 
                       fourth = "Youtube Playlist"/>
        </div>

        <hr />

        <div className={style.lastFooter}>
            <span>Shop.co &copy; 2000-2025, All Rights Reserved</span>
             
        </div>
      
    </div>
  )
}



export default BottomFooter
