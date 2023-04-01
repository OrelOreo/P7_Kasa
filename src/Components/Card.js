import React from 'react'
import "../Styles/Card.css"
import Data from "../data/data.json"
import { Link } from 'react-router-dom'


export default function Card() {

  return (
    <>
      {
        Data.map(item => {
          return (
            <Link key={ item.id }>
              <div className='card'>
                <img src={item.cover} alt="location d'appartement" />
                <h3> { item.title }</h3>
              </div>
            </Link>
            
          )
        })
      }
    </>
  )
}
