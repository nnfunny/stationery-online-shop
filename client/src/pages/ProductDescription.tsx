import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./PageStyles/ProductDescription.css";
import { FaArrowLeft } from "react-icons/fa";

const Desc1 = "/images/ProductDescription/image1.png";
const Desc2 = "/images/ProductDescription/image2.png";
const Desc3 = "/images/ProductDescription/image3.png";
const Desc4 = "/images/ProductDescription/image4.png";
const Desc5 = "/images/ProductDescription/image5.png";
const Desc6 = "/images/ProductDescription/image6.png";
const Desc7 = "/images/ProductDescription/image7.png";
const Desc8 = "/images/ProductDescription/image8.png";

const ProductDescription = () => {
  return (
    <div className="product-desc">
      <Header />
      <div className="product-desc-container">
        <BackButton />
        <div className="product-description-part">
          <ImageDescription />
          <TextDescription />
        </div>
        <Recommendation />
      </div>
      <Footer />
    </div>
  );
};

const BackButton = () => {
  return (
    <div className="back-button">
      <Link to="/products/mail">
        <FaArrowLeft className="back-icon"></FaArrowLeft>
        <span className="back-text">Back</span>
      </Link>
    </div>
  );
};

const ImageDescription = () => {
  return (
    <div className="image-desc col-md-7">
      <div className="big-image">
        <img src={Desc1} alt="Error" />
      </div>
      <div className="next-images">
        <img src={Desc2} alt="Error" />
        <img src={Desc3} alt="Error" />
        <img src={Desc4} alt="Error" />
      </div>
    </div>
  );
};

const TextDescription = () => {
  return (
    <div className="text-description col-md-5">
      <h4>12 Letterpress PostCards</h4>
      <div className="cost">$12.50</div>
      <div className="quantity">
        <div>Quantity</div>
        <input id="quantity-product" type="number" name="cost" />
      </div>
      <input type="button" value="ADD TO CART" />
      <p>
        A handsome pack of 12 letterpress postcards from Portugal, all featuring
        an eclectic mix of symbols, illustration & type. Great colours too. Nice
        for your wall & lovely to share.
      </p>
      <div className="share">
        Share:
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Instagram
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Twitter
        </a>
      </div>
    </div>
  );
};

const Recommendation = () => {
  return (
    <div className="recommendation">
      <div className="text">Recommendation</div>
      <div className="recommended-products">
        <img src={Desc5} alt="Error" />
        <img src={Desc6} alt="Error" />
        <img src={Desc7} alt="Error" />
        <img src={Desc7} alt="Error" />
      </div>
    </div>
  );
};

export default ProductDescription;
