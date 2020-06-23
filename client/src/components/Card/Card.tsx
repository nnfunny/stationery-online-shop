import React from "react";
import "./Card.css";

interface Props {
  link: string;
  name: string;
  price: number;
}
const CardItem: React.FC<Props> = ({ link, name, price }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={link} alt="Error" />
      </div>
      <div className="card-detail">
        <div className="name-product">{name}</div>
        <div className="price-product">${price}</div>
      </div>
    </div>
  );
};

export default CardItem;
