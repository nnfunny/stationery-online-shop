import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="cart">
      <FaShoppingCart className="cart-icon"></FaShoppingCart>
      <small className="quantity">0</small>
      <span className="cart-name">Cart</span>
      <span className="cost">($0.00)</span>
    </div>
  );
};

export default Cart;
