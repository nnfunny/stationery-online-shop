import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PageStyles/AboutUs.css";

const UsImage = "/images/AboutUs/us.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      <div className="about-us-container">
        <div className="us-image col-sm-8">
          <img src={UsImage} alt="Error" />
        </div>
        <div className="speech col-sm-4">
          <p>
            FunNy /^^/ opened the online shop in 2020. It is a place for you to
            recall or cherish the “back-to-school” feelings. We are passionate
            about designing simple and funny items which we discover on trips
            and adventures around the world.
          </p>
          <p>
            We are both graphic designers and enthusiastic travelers. We go on
            sourcing trips to explore more funny gems and apply these into our
            product. The hunting is fun and open a new world of meaningful
            things from little to huge, which makes us appreciate our lives.
          </p>
          <p>
            We want to kindle your interest in stationery through our
            discoveries.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
