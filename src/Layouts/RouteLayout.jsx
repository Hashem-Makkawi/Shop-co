import React from 'react'
import { Outlet } from 'react-router-dom'
import Alert from "../components/Notification/notification"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import ScrollToTop from '../components/ScrollToTop'

const RouteLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Alert/>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default RouteLayout
