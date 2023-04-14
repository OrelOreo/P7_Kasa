import React from 'react'
import Header from "../../Components/Header/Header"
import Dropdown from '../../Components/Dropdown/Dropdown'
import Footer from "../../Components/Footer/Footer"
import "./About.css"

export default function About() {
  return (
    <div>
        <Header />
        <div className='banner-about' />
        <Dropdown />
        <Footer />
    </div>
  )
}
