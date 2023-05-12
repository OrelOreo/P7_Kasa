import React from 'react'
import BtnSlider from '../BtnSlider/BtnSlider'
import { useState } from 'react'


export default function Slider(props) {

  const [slideIndex, setSlideIndex] = useState(1)
    
  const pictures = props.pictures
  const nextSlide = () => {
    if (slideIndex !== pictures.length) {
      setSlideIndex(slideIndex + 1)
    } else if(slideIndex === pictures.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if(slideIndex === 1) {
      setSlideIndex(pictures.length)
    }
  }

  return (
    <div className="container-slider">
              {
                pictures.map((item, index) => {
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
                { slideIndex } / { pictures.length}
              </span>
    </div>
  )
}
