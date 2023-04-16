import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Star from "../../assets/star.png"
import './PageProduit.css'

export default function PageProduit() {
  const location = useLocation()
  const tags = location.state.tags

  return (
    <div>
        <Header />
        <div className="card-content">
          <div className="caroussel">
            <img src={ location.state.cover } alt="" />
          </div>
          <div className="container-infos">
            <div className="location">
              <h2>{ location.state.title }</h2>
              <p>{ location.state.location }</p>
            </div>
            <div className="profil">
              <p> { location.state.host.name }</p>
              <img src={ location.state.host.picture} alt="profil du vendeur"/>
            </div>
          </div>
          <div className="container-tags-ratings">
            <div className="tags">
              {
                tags.map((tag, index) => {
                  return (
                    <p className='tag' key={index}>{ tag }</p>
                  )
                })
              }
            </div>
            <div className="ratings">

            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
