import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="navigation-item">
        HOME
        <div className="underbar-home"></div>
      </Link>
      <div className="navigation-item product-item">
        PRODUCTS
        <div className="underbar-products"></div>
        <div className="product-list">
          <Link to="/products/mail">
            <li>MAIL</li>
          </Link>
          <Link to="/products/give">
            <li>GIVE</li>
          </Link>
          <Link to="/products/notes">
            <li>NOTES</li>
          </Link>
          <Link to="/products/write">
            <li>WRITE</li>
          </Link>
          <Link to="/products/read">
            <li>READ</li>
          </Link>
          <Link to="/products/organize">
            <li>ORGANIZE</li>
          </Link>
        </div>
      </div>
      <Link to="/collections" className="navigation-item">
        COLLECTIONS
        <div className="underbar-collections"></div>
      </Link>
      <Link to="/about-us" className="navigation-item">
        ABOUT US
        <div className="underbar-about"></div>
      </Link>
    </div>
  );
};

export default Navigation;
