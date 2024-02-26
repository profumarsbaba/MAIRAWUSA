import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import sweet from '../Asset/sweet.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            
          </div>
          <p>Collections</p>
          <p className="maira">Welcome To Mairawusa</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRight />
        </div>
      </div>
      <div className="hero-right">
        <img src={sweet} alt='tobechange'/>
      </div>
    </div>
  );
};

export default Hero;
