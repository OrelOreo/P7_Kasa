import React from 'react'
import Logo from "../../assets/LOGO.png"
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
        <img src={Logo} alt="Logo Kasa" />
        <nav>
            <Link to="/home">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    </header>
  )
}
