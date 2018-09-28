import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li>
          <NavLink
            to="/"
            className="footer__nav__item"
            activeStyle={{
              color: "rgb(201, 136, 101)",
              borderLeft: "solid 3px rgb(201, 136, 101)"
            }}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trees"
            className="footer__nav__item"
            activeStyle={{
              color: "rgb(201, 136, 101)",
              borderLeft: "solid 3px rgb(201, 136, 101)"
            }}
            exact
          >
            Trees
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="footer__nav__item"
            activeStyle={{
              color: "rgb(201, 136, 101)",
              borderLeft: "solid 3px rgb(201, 136, 101)"
            }}
            exact
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="footer__legal">
        <li className="footer__legal__item ">All Rights Reserved</li>
        <li className="footer__legal__item">Canopy&copy;2018</li>
        <li className="footer__legal__item">
          Images used for educational purposes only
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
