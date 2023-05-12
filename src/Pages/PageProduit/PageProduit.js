import React from 'react'
import Dropdown from "../../Components/Dropdown/Dropdown"
import { useLocation, Navigate } from 'react-router-dom'
import Slider from '../../Components/Slider/Slider'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import StarEmpty from "../../assets/star-empty.png"
import StarFill from "../../assets/star-fill.png"
import Data from "../../data.json"
import './PageProduit.css'

export default function PageProduit() {
 
  const location = useLocation()
  const pathname = location.pathname.split("/")
  const id = Data.find(logement => logement.id === pathname[2])
  if (id === undefined) {
    return <Navigate to='/404'/>
  }

  const tags = location.state.tags
  const rateRange = [1,2,3,4,5]
  const rateValue = location.state.rating

    return (
      <div>
          <Header />
          <div className="card-content">
            <Slider pictures={location.state.pictures} />
            <div className="container">
              <div>
                <div className="localisation">
                  <h2>{ location.state.title }</h2>
                  <p> { location.state.location }</p>
                </div>
                <div className="tags">
                    {
                      tags.map((tag, index) => {
                        return (
                          <p className='tag' key={index}>{ tag }</p>
                        )
                      })
                    }
                  </div>
              </div>
                <div className="stars-info-profil">
                  <div className="profil">
                    <p> { location.state.host.name }</p>
                    <img src={ location.state.host.picture} alt="profil du vendeur"/>
                  </div>
                  <div className="ratings">
                    {
                      rateRange.map((rangeElem) => 
                        rateValue >= rangeElem ?
                        <img key={rangeElem.toString()} src={StarFill} alt='étoile remplie' /> :
                        <img key={rangeElem.toString()} src={StarEmpty} alt='etoile vide' />
                      )
                    }
                  </div>            
                </div>
            </div>
            <div className='container-dropdowns'>
              <Dropdown title={"Description"} content={location.state.description} />
              <Dropdown title={"Équipements"} content={location.state.equipments} />
            </div>
          </div>
          <Footer />
      </div>
    )
}