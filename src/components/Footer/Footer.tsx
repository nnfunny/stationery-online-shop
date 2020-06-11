import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <Subscriber />
        <Social />
      </div>
      <div className="love">
        Made with <span>&#9829; </span>
        by Nam
      </div>
    </div>
  );
};

const Subscriber = () => {
  return (
    <div className="subscriber">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter email address to receive our newsletters"
      />
      <input type="button" value="SUBSCRIBE" />
    </div>
  );
};

const Social = () => {
  return (
    <div className="social">
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebook className="icon"></FaFacebook>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram className="icon"></FaInstagram>
      </a>
      <a href="https://twitter.com/" target="_blank">
        <FaTwitter className="icon"></FaTwitter>
      </a>
    </div>
  );
};
export default Footer;
