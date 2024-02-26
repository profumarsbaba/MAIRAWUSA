import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
// import { add } from "date-fns";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <div className="productdisplay-under-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <FaStar className="stIcon"/>
          <FaStar className="stIcon"/>
          <FaStar className="stIcon"/>
          <FaStar className="stIcon"/>
          <FaStar style={{ opacity: "0.5" }} className="stIcon"/>
          <p>{Math.floor(Math.random() * 1200)}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ₦{product.oldPrice}
          </div>
          <div className="productdisplay-right-prices-new">
            ₦{product.newPrice}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          cumque, doloremque ad eligendi sit accusamus deleniti distinctio
          dolorum quo neque atque, ratione accusantium sed at? Numquam vero
          repellendus facere cumque!
        </div>
        </div>
        {/* <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
            </div>
        </div> */}
        <Link to={'/cart'} className="btn">
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
         ADD TO CART
        </button>
        </Link>
        {/* <p className="productdisplay-right-category"><span>Category :</span>Bisquit, Milik, Detergent, Sweet</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
