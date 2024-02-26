import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { FaArrowCircleDown } from "react-icons/fa";
import Item from "../Component/Item/Item";


const ShopCategory = (props) => {
  const [c, sC] = useState(0);
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        <div className="discount">
          <h1>FLAT 50% OF</h1>
          <p><span>12</span> Hours <span>20</span>Minut</p>
          <button>Explore now</button>
        </div>
     
      <div className='right'>
        <img src={props.banner} alt="" className="shopcategory-banner"/>
      </div>


      </div>
      <div className="shopcategory-inedxSort">
        <p>
          <span>Shopping 1-12</span> out of 36
        </p>
        <div className="shopcategory-sort">
          Sort by <FaArrowCircleDown />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return <Item key={item?.id} item={item} className='item'/>;
          }else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
      Explore now
      </div>
    </div>
  );
};

export default ShopCategory;
