import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <Link to="/cart">
        <FaShoppingCart className="cart-icon"></FaShoppingCart>
        <small className="quantity">0</small>
        <span className="cart-name">Cart</span>
        <span className="cost">($0.00)</span>
      </Link>
    </div>
  );
};

export default Cart;
