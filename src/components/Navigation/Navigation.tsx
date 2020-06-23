import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as ReactCSS from "react-transition-group";
import { css } from "@emotion/core";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navigation">
        <a href="/" className="navigation-item">
          HOME
          <div className="underbar-home"></div>
        </a>
        <div className="navigation-item product-item">
          PRODUCTS
          <div className="underbar-products"></div>
          <div className="product-list">
            <a href="/products/mail">
              <li>MAIL</li>
            </a>
            <a href="/products/give">
              <li>GIVE</li>
            </a>
            <a href="/products/notes">
              <li>NOTES</li>
            </a>
            <a href="/products/write">
              <li>WRITE</li>
            </a>
            <a href="/products/read">
              <li>READ</li>
            </a>
            <a href="/products/organize">
              <li>ORGANIZE</li>
            </a>
          </div>
        </div>
        <a href="/collections" className="navigation-item">
          COLLECTIONS
          <div className="underbar-collections"></div>
        </a>
        <a href="/about-us" className="navigation-item">
          ABOUT US
          <div className="underbar-about"></div>
        </a>
      </div>

      <div className="navigation-phone">
        <div className="nav-phone" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu className="icon"></GiHamburgerMenu>
        </div>
        {open && <DropDownMenu />}
      </div>
    </>
  );
};

const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(0);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  return (
    <div
      className="dropdown-menu"
      css={css`
        height: ${menuHeight}px;
      `}
    >
      <ReactCSS.CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <a href="/" className="menu-item">
            HOME
          </a>
          <div
            className="menu-item"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveMenu("products")}
          >
            PRODUCTS
          </div>
          <a href="/collections" className="menu-item">
            COLLECTIONS
          </a>
          <a href="/about-us" className="menu-item">
            ABOUT US
          </a>
        </div>
      </ReactCSS.CSSTransition>
      <ReactCSS.CSSTransition
        in={activeMenu === "products"}
        unmountOnExit
        timeout={500}
        classNames="menu-product"
        onEnter={calcHeight}
      >
        <div className="menu">
          <div
            className="menu-item back-icon"
            style={{ cursor: "pointer", width: "50px", padding: "0px" }}
            onClick={() => setActiveMenu("main")}
          >
            <IoMdArrowRoundBack />
          </div>
          <a href="/products/mail" className="menu-item">
            <li>MAIL</li>
          </a>
          <a href="/products/give" className="menu-item">
            <li>GIVE</li>
          </a>
          <a href="/products/notes" className="menu-item">
            <li>NOTES</li>
          </a>
          <a href="/products/write" className="menu-item">
            <li>WRITE</li>
          </a>
          <a href="/products/read" className="menu-item">
            <li>READ</li>
          </a>
          <a href="/products/organize" className="menu-item">
            <li>ORGANIZE</li>
          </a>
        </div>
      </ReactCSS.CSSTransition>
    </div>
  );
};

export default Navigation;
