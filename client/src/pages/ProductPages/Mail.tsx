import React from "react";
import Props from "./interface";
import Card from "../../components/Card";
import HeaderProduct from "../../components/HeaderProduct";
import Filter from "../../components/Filter";
import "../PageStyles/Mail.css";

// Temporary
const Number3 = "/images/Mails/3.png";
const Number9 = "/images/Mails/9.png";

const Mail: React.FC<Props> = () => {
  return (
    <div className="mail-container">
      <HeaderProduct name={"Mail"} link={Number9} />
      <Filter />
      <div className="mail-product-list">
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
        <Card link={Number3} name={"12 Letterpress Postcards"} price={12.5} />
      </div>
    </div>
  );
};

export default Mail;
