import React from 'react'
import './Offers.css'
import zzzz from '../Asset/zzzz.png'


const Offers = () => {
  return (
    <div className='Offers'>
    <div className='Offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY FOR BESTSELLERS PRODUCT</p> 
        <button>Check Now</button>
    </div>
    <div className='Offers-right'>
      <img src={zzzz} alt="" />
    </div>
    </div>
  )
}

export default Offers