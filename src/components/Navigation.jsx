import React from "react";

import "../assets/style/Navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation-container container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className="navigation-ul">
        {props.isLoggedIn && (
          <li>
            <NavLink to="/main" activeclassname="active" className="main-btn">
              Főoldal
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink to="/menu" activeclassname="active" className="menu-btn">
              Menü
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink to="/input" activeclassname="active" className="input-btn">
              Adatlap
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink
              to="/admin"
              style={{ pointerEvents: "none" }}
              activeclassname="active"
              className="admin-btn"
            >
              Admin
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink
              to="/"
              activeclassname="active"
              className="logout-btn"
              onClick={props.onLogout}
            >
              Kijelentkezés
            </NavLink>
          </li>
        )}
      </ul>
      <h1 className="logo">V&amp;S</h1>
    </div>
  );
};

export default Navigation;
