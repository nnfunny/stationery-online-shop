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
        <Link to="/" className="navigation-item">
          HOME
          <div className="underbar-home"></div>
        </Link>
        <div className="navigation-item product-item">
          PRODUCTS
          <div className="underbar-products"></div>
          <div className="product-list">
            <Link to="/products/mail">
              <li>MAIL</li>
            </Link>
            <Link to="/products/give">
              <li>GIVE</li>
            </Link>
            <Link to="/products/notes">
              <li>NOTES</li>
            </Link>
            <Link to="/products/write">
              <li>WRITE</li>
            </Link>
            <Link to="/products/read">
              <li>READ</li>
            </Link>
            <Link to="/products/organize">
              <li>ORGANIZE</li>
            </Link>
          </div>
        </div>
        <Link to="/collections" className="navigation-item">
          COLLECTIONS
          <div className="underbar-collections"></div>
        </Link>
        <Link to="/about-us" className="navigation-item">
          ABOUT US
          <div className="underbar-about"></div>
        </Link>
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
          <Link to="/" className="menu-item">
            HOME
          </Link>
          <div
            className="menu-item"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveMenu("products")}
          >
            PRODUCTS
          </div>
          <Link to="/collections" className="menu-item">
            COLLECTIONS
          </Link>
          <Link to="/about-us" className="menu-item">
            ABOUT US
          </Link>
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
          <Link to="/products/mail" className="menu-item">
            <li>MAIL</li>
          </Link>
          <Link to="/products/give" className="menu-item">
            <li>GIVE</li>
          </Link>
          <Link to="/products/notes" className="menu-item">
            <li>NOTES</li>
          </Link>
          <Link to="/products/write" className="menu-item">
            <li>WRITE</li>
          </Link>
          <Link to="/products/read" className="menu-item">
            <li>READ</li>
          </Link>
          <Link to="/products/organize" className="menu-item">
            <li>ORGANIZE</li>
          </Link>
        </div>
      </ReactCSS.CSSTransition>
    </div>
  );
};

export default Navigation;
