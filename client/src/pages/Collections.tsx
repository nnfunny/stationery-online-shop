import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpringImage, SummerImage, AutumnImage } from "../images/Images";
import "./PageStyles/Collections.css";

const Collections = () => {
  return (
    <div className="collections">
      <Header />
      <div className="collections-container">
        <div className="collection-item">
          <div className="collection-name">
            <span>SPRING</span>
          </div>
          <div className="collection-image">
            <img src={SpringImage} alt="Error" />
          </div>
        </div>
        <div className="collection-item">
          <div className="collection-name">
            <span>SUMMER</span>
          </div>
          <div className="collection-image">
            <img src={SummerImage} alt="Error" />
          </div>
        </div>
        <div className="collection-item">
          <div className="collection-name">
            <span>AUTUMN</span>
          </div>
          <div className="collection-image">
            <img src={AutumnImage} alt="Error" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
