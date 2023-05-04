import React from 'react'
import Header from "../../Components/Header/Header"
import './PageNotFound.css'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
        <Header />
        <div className="notFound">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </div>
  )
}
