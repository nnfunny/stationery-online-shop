import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UsImage } from "../images/Images";
import "./PageStyles/AboutUs.css";

const CartPage = () => {
  return (
    <div className="cart-summary">
      <Header />
      <div className="cart-summary-container">Cart</div>
      <Footer />
    </div>
  );
};

export default CartPage;
