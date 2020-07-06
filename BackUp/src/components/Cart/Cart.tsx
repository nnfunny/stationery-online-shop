import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Cart = () => {
  const cart: CartState = useSelector((state: RootState) => state.cart);
  const { cartItems, total } = cart;
  return (
    <div className="cart">
      <Link to="/cart">
        <FaShoppingCart className="cart-icon"></FaShoppingCart>
        <small className="quantity">{cartItems.length}</small>
        <span className="cart-name">Cart</span>
        <span className="cost">(${total})</span>
      </Link>
    </div>
  );
};

export default Cart;
