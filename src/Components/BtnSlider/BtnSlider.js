import React from 'react'
import leftArrow from "../../assets/left-arrow.png"
import rightArrow from "../../assets/right-arrow.png"

export default function BtnSlider({direction, moveSlide}) {
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>
        <img src={direction === "next" ? rightArrow : leftArrow} 
             alt='arrow direction' />
    </button>
  )
}
