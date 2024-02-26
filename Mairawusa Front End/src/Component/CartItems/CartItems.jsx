import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { FaTimes } from 'react-icons/fa'

const CartItems = () => {
      
   const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        { all_product.map((e)=>{

           if(cartItems[e.id]>0){
                return <div key={e.id}>
                <div className="cartItems-format cartItems-format-main">
                    <img src={e.image} alt=""className='carticon-product-image' />
                    <p>{e.name}</p>
                    <p>₦{e.newPrice}</p>
                    <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                    <p>₦{e.newPrice * cartItems[e.id]}</p>
                    {/* ==0?1:cartItems[e.id] */}
                    <FaTimes onClick={()=>{removeFromCart(e.id)}} style={{cursor:'pointer'}}/>
                </div>
                <hr />
            </div>
            }
            return null;
         
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₦{ getTotalCartAmount() }</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>₦{ getTotalCartAmount() }</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems