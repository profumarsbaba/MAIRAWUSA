import React from "react";
import "./Footer.css";
import zzzz from "../Asset/mairawusalogo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
   
   const date = new Date();
   const year = date.getFullYear();


  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={zzzz} alt="" />
        </Link>
        <p>MAIRAWUSA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://wa.me/+2348145095026">
            
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://instagram.com/sbaba_usb?igshid=OGQ5ZDc2ODk2ZA==">
           
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.facebook.com/umarbaba.said">
            <FaFacebook className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ <span>{ year }</span> - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
