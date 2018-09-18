import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="nav">
      <section>
        <NavLink to="/" className="logo-container">
          <i className="fas fa-tree" />
          <span className="logo-text">Canopy</span>
        </NavLink>
      </section>
      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            className="nav__list__item"
            activeStyle={{
              color: "rgb(104, 68, 49)",
              borderBottom: "solid 3px rgb(104, 68, 49)"
            }}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trees"
            className="nav__list__item"
            activeStyle={{
              color: "rgb(104, 68, 49)",
              borderBottom: "solid 3px rgb(104, 68, 49)"
            }}
            exact
          >
            Trees
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav__list__item"
            activeStyle={{
              color: "rgb(104, 68, 49)",
              borderBottom: "solid 3px rgb(104, 68, 49)"
            }}
            exact
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
