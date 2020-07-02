import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { css } from "@emotion/core";
import "./PageStyles/Home.css";

const Image1 = "/images/Home/image1.png";
const Image2 = "/images/Home/image2.png";
const Image3 = "/images/Home/image3.png";
const Image4 = "/images/Home/image4.png";
const Image5 = "/images/Home/image5.png";
const Image6 = "/images/Home/image6.png";
const Image7 = "/images/Home/image7.png";
const Image8 = "/images/Home/image8.png";

const Home = () => {
  useEffect(() => {
    let slideIndex = 0;
    let timeOut: ReturnType<typeof setTimeout>;
    autoMoveSlide();
    moveSlide(slideIndex);
    let prev = document.getElementById("prev")!;
    let next = document.getElementById("next")!;

    function forwardSlide() {
      moveSlide(++slideIndex);
    }
    function backwardSlide() {
      moveSlide(--slideIndex);
    }

    function moveSlide(n: number) {
      let i;
      let slides = document.getElementsByClassName(
        "slide-show"
      ) as HTMLCollectionOf<HTMLDivElement>;
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }

    function autoMoveSlide() {
      let i;
      let slides = document.getElementsByClassName(
        "slide-show"
      ) as HTMLCollectionOf<HTMLDivElement>;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      timeOut = setTimeout(autoMoveSlide, 5000);
    }
    prev.addEventListener("click", backwardSlide);
    next.addEventListener("click", forwardSlide);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

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
            className="slide-show fade-effect"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          ></div>
          <div
            className="slide-show fade-effect"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          ></div>
          <div
            className="slide-show fade-effect"
            style={{
              backgroundImage: `url(${Image5})`,
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
