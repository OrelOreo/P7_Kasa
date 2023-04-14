import React from 'react'
import LogoFooter from "../../assets/logo-footer.png"
import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <img src={LogoFooter} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
