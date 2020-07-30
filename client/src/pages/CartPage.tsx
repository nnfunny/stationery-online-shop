import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PageStyles/CartPage.css";
import { MdDeleteForever } from "react-icons/md";
import { CartState, ProductInCart } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeCart } from "../actions/cartAction";

const CartPage = () => {
  const cart: CartState = useSelector((state: RootState) => state.cart);
  const { cartItems, total } = cart;
  return (
    <div className="cart-summary">
      <Header />
      <div className="cart-summary-container">
        <div className="cart-title">Shopping Cart Summary</div>
        {cartItems === undefined || cartItems.length === 0 ? (
          <div>There are no products in your cart</div>
        ) : (
          <>
            <CartTable cart={cartItems} />
            <div className="total-container">
              <input className="update-button" type="button" value="UPDATE" />
              <div className="subtotal-text">Subtotal before delivery</div>
              <div className="subtotal-number">${total}</div>
              <input
                className="checkout-button"
                type="button"
                value="CHECKOUT"
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

interface Props {
  cart: ProductInCart[];
}
const CartTable: React.FC<Props> = ({ cart }) => {
  const dispatch = useDispatch();
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
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="cart-item-desc">
                  <img src={item.imagePath} alt="Error" />
                  <div className="cart-item-name">
                    <div>{item.productName}</div>
                    <MdDeleteForever
                      className="delete-icon"
                      onClick={() => dispatch(removeCart(item))}
                      style={{ cursor: "pointer", color: "#e98074" }}
                    ></MdDeleteForever>
                  </div>
                </td>
                <td className="cart-item-quantity">
                  <input type="number" defaultValue={item.quantity} />
                </td>
                <td className="cart-item-price">
                  ${item.quantity * item.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartPage;
