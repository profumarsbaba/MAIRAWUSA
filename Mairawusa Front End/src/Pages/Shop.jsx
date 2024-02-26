import React from 'react'
import './CSS/Shop.css'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollection from '../Component/NewCollection/NewCollection'
import NewsLetter from '../Component/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div className='shop'>
      
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />

    </div>
  )
}

export default Shop