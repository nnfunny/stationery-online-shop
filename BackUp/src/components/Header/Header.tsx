import React from "react";
import "./Header.css";
import Cart from "../Cart";
import Search from "../Search";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="shop-name">
        <a href="/">FunNy /^^/</a>
      </div>
      <div className="subheader">
        <Search />
        <span className="welcome">/WELCOME/</span>
        <Cart />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
