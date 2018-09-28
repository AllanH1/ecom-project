import React from "react";
import { NavLink } from "react-router-dom";
import auth0Client from "../Security/Auth";

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
              color: "rgb(201, 136, 101)",
              borderBottom: "solid 3px rgb(201, 136, 101)"
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
              color: "rgb(201, 136, 101)",
              borderBottom: "solid 3px rgb(201, 136, 101)"
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
              color: "rgb(201, 136, 101)",
              borderBottom: "solid 3px rgb(201, 136, 101)"
            }}
            exact
          >
            Contact
          </NavLink>
        </li>
        {auth0Client.isAuthenticated() ? (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        ) : null}
        <li>
          {!auth0Client.isAuthenticated() && (
            <button className="header__auth" onClick={auth0Client.signIn}>
              Log In
            </button>
          )}
          {auth0Client.isAuthenticated() && (
            <button className="header__auth" onClick={auth0Client.signOut}>
              Log Out
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Nav;
