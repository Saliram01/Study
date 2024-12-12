import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

function RootLayout() {
  return (
    <div>
        <Header/>
          <div className="container">
            <Outlet/>
          </div>
        <Footer/>
    </div>
  )
}

export default RootLayout