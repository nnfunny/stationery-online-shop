import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="/" className="navigation-item">
        HOME
      </a>
      <a href="/" className="navigation-item">
        PRODUCTS
      </a>
      <a href="/" className="navigation-item">
        COLLECTIONS
      </a>
      <a href="/" className="navigation-item">
        ABOUT US
      </a>
    </div>
  );
};

export default Navigation;
