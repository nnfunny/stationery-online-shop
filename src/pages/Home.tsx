import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { css } from "@emotion/core";

const Home = () => {
  return (
    <div
      className="home"
      css={css`
        height: inherit;
      `}
    >
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
