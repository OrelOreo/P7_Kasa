import React from 'react'
import Header from '../../Components/Header'
import Card from '../../Components/Card'
import '../../Styles/Home.css'

export default function Home() {

  return (
    <div>
        <Header />
        <div className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <section>
          <Card />
        </section>
    </div>
  )
}