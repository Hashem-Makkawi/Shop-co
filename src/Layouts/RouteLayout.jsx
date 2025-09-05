import React from 'react'
import { Outlet } from 'react-router-dom'
import Alert from "../components/Notification/notification"
import Header from "../components/Header/header"

const RouteLayout = () => {
  return (
    <div>
      <Alert/>
      <Header/>
      <Outlet></Outlet>

    </div>
  )
}

export default RouteLayout
