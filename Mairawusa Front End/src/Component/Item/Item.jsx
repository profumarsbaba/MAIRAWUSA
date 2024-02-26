import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='item'>
       <Link to={`/product/${item.id}`}><img onClick={()=> window.scrollTo(0,0)} src={item.image} alt={item.name} /></Link>
        <p>{item.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
          ₦{item.newPrice}
          </div>
          <div className="item-price-old">
          ₦{item.oldPrice}
          </div>
        </div>
    </div>
  )
}

export default Item;