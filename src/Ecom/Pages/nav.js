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
            <i className="fas fa-home" />
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
            <i className="fas fa-shopping-cart" />
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
            <i className="fas fa-comment" />
          </NavLink>
        </li>
        {auth0Client.isAuthenticated() ? (
          <li>
            <NavLink
              to="/admin"
              className="nav__list__item"
              activeStyle={{
                color: "rgb(201, 136, 101)",
                borderBottom: "solid 3px rgb(201, 136, 101)"
              }}
              exact
            >
              <i className="fas fa-user-tie" />
            </NavLink>
          </li>
        ) : null}
        <li>
          {!auth0Client.isAuthenticated() && (
            <button className="header__auth" onClick={auth0Client.signIn}>
              <i className="fas fa-sign-in-alt" />
            </button>
          )}
          {auth0Client.isAuthenticated() && (
            <button className="header__auth" onClick={auth0Client.signOut}>
              <i className="fas fa-sign-out-alt" />
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Nav;
