import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <NavLink
          exact to="/"
          activeClassName="selected"
          className="nav-link"
        >Home</NavLink>
      </div>
      <div className="navbar-item">
        <NavLink
           to="/games"
          activeClassName="selected"
          className="nav-link"
        >Games</NavLink>
      </div>
      <div className="navbar-item">
        <NavLink
           to="/about"
          activeClassName="selected"
          className="nav-link"
        >About</NavLink>
      </div>
    </div>
  );
}

export default Nav;