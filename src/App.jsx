import React from 'react'
import "./App.css"
import Nav from './Component/Nav/Nav'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import {Outlet} from 'react-router-dom'
import Listing from './Component/Listing/Listing'
import Contact from './Component/Contactus/Contact'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
