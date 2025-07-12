import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2><span style={{color:"#CCFF00"}}>E</span>-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <div className="user-detail">Login / Sign up</div>
        </div>
        <Link to="/cart">
          <div className="cart">
            Cart
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/Mobile" className="custom-link">
            <li>Mobile</li>
          </Link>

          <Link to="/Computer" className="custom-link">
            <li>Computer</li>
          </Link>

          <Link to="/Watch" className="custom-link">
            <li>Watche</li>
          </Link>

          <Link to="/Tv" className="custom-link">
            <li>Tv</li>
          </Link>
          <Link to="/Speaker" className="custom-link">
            <li>Speaker</li>
          </Link>

          <Link to="/MenFashion" className="custom-link">
            <li>Men Fashion</li>
          </Link>

          <Link to="/WomenFashion" className="custom-link">
            <li>Women Fashion</li>
          </Link>

          <Link to="/Furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/Kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/Fridge" className="custom-link">
            <li>Fridge</li>
          </Link> 

          <Link to="/Ac" className="custom-link">
            <li>Ac</li>
          </Link>

          <Link to="/Book" className="custom-link">
            <li>Book</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
