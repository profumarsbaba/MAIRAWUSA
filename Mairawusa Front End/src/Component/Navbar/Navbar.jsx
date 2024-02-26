import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { FaBox, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import dropdown from "../Asset/dropdown.png";
import zzzz from "../Asset/mairawusalogo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalCartItem } = useContext(ShopContext);
  const [menu, setMenu] = useState("null");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>
          <Link to="/" className="Link" onClick={() => setMenu("null")}>
            {" "}
            <img src={zzzz} className="Mlogo" />{" "}
          </Link>
        </p>
      </div>
      <img src={dropdown} className="nav-dropdown" onClick={dropdown_toggle} />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("Biscuit")}>
          <Link to="/biskit" className="Link">
            Biscuit
          </Link>{" "}
          {menu === "Biscuit" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Milik")}>
          <Link to="/milik" className="Link">
            Milk
          </Link>{" "}
          {menu === "Milik" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Detergent")}>
          <Link to="/omo" className="Link">
            Detergent
          </Link>{" "}
          {menu === "Detergent" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Sweet")}>
          <Link to="/alawa" className="Link">
            Sweet
          </Link>{" "}
          {menu === "Sweet" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-card">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              alert("Logout was successufully")
              navigate("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="Link">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart" className="Link">
          <FaCartPlus className="nav-cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
