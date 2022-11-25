import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <div className="Layout">
    <Outlet/>
    </div>
  
    <Footer/>
    </>
  )
}

export default Layout