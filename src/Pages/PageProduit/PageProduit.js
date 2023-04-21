import React from 'react'
import Dropdown from "../../Components/Dropdown/Dropdown"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import BtnSlider from '../../Components/BtnSlider/BtnSlider'
import Star from "../../assets/star.png"
import './PageProduit.css'

export default function PageProduit() {

  const location = useLocation()
  const tags = location.state.tags
  const [slideIndex, setSlideIndex] = useState(1)

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
          <div className='container-dropdowns'>
            <Dropdown title={"Description"} state={location.state.description} />
            <Dropdown title={"Équipements"} state={location.state.equipments} />
          </div>
        </div>
        <Footer />
    </div>
  )
}
