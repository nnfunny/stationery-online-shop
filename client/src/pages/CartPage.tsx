import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Number3 } from "../images/Images";
import "./PageStyles/CartPage.css";
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {
  return (
    <div className="cart-summary">
      <Header />
      <div className="cart-summary-container">
        <div className="cart-title">Shopping Cart Summary</div>
        <CartTable />
        <div className="total-container">
          <input className="update-button" type="button" value="UPDATE" />
          <div className="subtotal-text">Subtotal before delivery</div>
          <div className="subtotal-number">$12.50</div>
          <input className="checkout-button" type="button" value="CHECKOUT" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CartTable = () => {
  return (
    <>
      <table className="cart-table" id="cart-table">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th style={{ textAlign: "right" }}>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cart-item-desc">
              <img src={Number3} alt="Error" />
              <div className="cart-item-name">
                <div>12 Letterpress Postcards</div>
                <MdDeleteForever className="delete-icon"></MdDeleteForever>
              </div>
            </td>
            <td className="cart-item-quantity">
              <input type="number" />
            </td>
            <td className="cart-item-price">$12.50</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartPage;
