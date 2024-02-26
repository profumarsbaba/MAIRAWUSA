import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = (props) => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews</div>
        </div>
        <div className="descriptionbox-description">
            <p> 
               An e-commerce website is an online plartform that facilitates the buying and selling of products or services over the internet without going to the Singa market, it serves as a vitual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transaction without the need for a phsical presence, E-commercewebsite have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products ot services along with detailed descriptions, images, prices, and any available variations(e.g, size, quantity). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  ) 
}

export default DescriptionBox