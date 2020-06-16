import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { css } from "@emotion/core";
import "./PageStyles/Home.css";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image7,
  Image8,
} from "./PageStyles/images/Images";

const Home = () => {
  return (
    <div
      className="home"
      css={css`
        height: inherit;
      `}
    >
      <Header />
      <div className="home-container grid-container">
        <div className="image-card slideshow-container">
          <div
            className="slide-show"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          ></div>
          <div
            className="slide-show"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          ></div>
          <div
            className="slide-show"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          ></div>
          <button className="prev" id="prev">
            &#10094;
          </button>
          <button className="next" id="next">
            &#10095;
          </button>
        </div>
        <div className="image-subcontainer">
          <div
            className="image-card"
            style={{
              backgroundImage: `url(${Image5})`,
            }}
          ></div>
          <div
            className="image-card"
            style={{
              backgroundImage: `url(${Image7})`,
            }}
          ></div>
        </div>
        <div
          className="image-card"
          style={{
            backgroundImage: `url(${Image3})`,
          }}
        ></div>
        <div
          className="image-card"
          style={{
            backgroundImage: `url(${Image4})`,
          }}
        ></div>
        <div
          className="image-card"
          style={{
            backgroundImage: `url(${Image8})`,
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
