import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PageStyles/Collections.css";

const SpringImage = "/images/Collections/image1.png";
const SummerImage = "/images/Collections/image2.png";
const AutumnImage = "/images/Collections/image3.png";

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
