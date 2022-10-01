import React from "react";
import logo from "../../images/logo-fashion-store.svg";
import user from "../../images/vector5.svg";
import search from "../../images/vector6.svg";
import cart from "../../images/vector9.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="bg-light">
      <div className="wrapper">
        {/* ! header top */}
        <div className="top d-flex justify-content-between align-items-center">
          <div className="text-secondary call-us">
            <p className="m-0">
              <small>Questions? Call us:</small>
            </p>
            <p className="m-0">
              <small>01708013921</small>
            </p>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="icon">
            <img src={search} alt="" />
            <img className="ms-3" src={user} alt="" />
            <img className="ms-3 cart-icon" src={cart} alt="" />
          </div>
        </div>
        {/* ! header bottom */}
        <nav>
          <ul className="d-flex justify-content-center">
            <li className="me-4">
              <a className="nav-list" href="/home">
                HOME
              </a>
            </li>
            <li className="me-4">
              <a className="nav-list" href="/home">
                SHOP
              </a>
            </li>
            <li className="me-4">
              <a className="nav-list" href="/home">
                ORDER
              </a>
            </li>
            <li>
              <a className="nav-list" href="/home">
                ABOUT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
