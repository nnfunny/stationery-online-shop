import React from "react";
import "./HeaderProduct.css";

interface Props {
  name: string;
  link: string;
}
const HeaderProductItem: React.FC<Props> = ({ name, link }) => {
  return (
    <div className="header-product-item row">
      <div className="text-product col-sm">
        <span>{name}</span>
      </div>
      <div className="header-product-image col-sm">
        <img src={link} alt="Error" />
      </div>
    </div>
  );
};

export default HeaderProductItem;
