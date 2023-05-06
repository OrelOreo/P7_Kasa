import React from 'react'
import Dropdown from "../../Components/Dropdown/Dropdown"
import { useLocation, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import BtnSlider from '../../Components/BtnSlider/BtnSlider'
import StarEmpty from "../../assets/star-empty.png"
import StarFill from "../../assets/star-fill.png"
import Data from "../../data.json"
import './PageProduit.css'

export default function PageProduit() {
  const [slideIndex, setSlideIndex] = useState(1)
 
  const location = useLocation()
  const pathname = location.pathname.split("/")
  const id = Data.find(logement => logement.id === pathname[2])
  if (id === undefined) {
    return <Navigate to='/404'/>
  }

  const tags = location.state.tags
  const rateRange = [1,2,3,4,5]
  const rateValue = location.state.rating

  const nextSlide = () => {
    if (slideIndex !== location.state.pictures.length) {
      setSlideIndex(slideIndex + 1)
    } else if(slideIndex === location.state.pictures.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if(slideIndex === 1) {
      setSlideIndex(location.state.pictures.length)
    }
  }
    return (
      <div>
          <Header />
          <div className="card-content">
            <div className="container-slider">
              {
                location.state.pictures.map((item, index) => {
                  return (
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={index}>
                      <img src={item} alt='location' />
                    </div>
                  )
                })
              }
              <BtnSlider moveSlide={nextSlide} direction={'next'} />
              <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
              <span>
                { slideIndex } / { location.state.pictures.length}
              </span>
            </div>
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