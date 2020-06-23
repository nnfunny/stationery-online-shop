import React from "react";
import Props from "./interface";
import Card from "../../components/Card";
import HeaderProduct from "../../components/HeaderProduct";
import "../PageStyles/Mail.css";

// Temporary
import Image3 from "../../components/Card/images/3.png";
import Image9 from "../../components/HeaderProduct/images/9.png";

const Mail: React.FC<Props> = () => {
  return (
    <div className="mail-container">
      <HeaderProduct name={"Mail"} link={Image9} />
      <div className="mail-product-list">
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Image3} name={"12 Letterpress Postcards"} price={12.5} />
      </div>
    </div>
  );
};

export default Mail;
