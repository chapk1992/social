import React from "react";
import nav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={nav.Nav}>
      <div className={nav.NavItem}>
        <NavLink to="/profile" activeClassName={nav.active}>
          Profile
        </NavLink>
      </div>
      <div className={nav.NavItem}>
        <NavLink to="/dialogs" activeClassName={nav.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={nav.NavItem}>
        <NavLink to="/music" activeClassName={nav.active}>
          Music
        </NavLink>
      </div>
      <div className={nav.NavItem}>
        <NavLink to="/news" activeClassName={nav.active}>
          News
        </NavLink>
      </div>
      <div className={nav.NavItem}>
        <NavLink to="/settings" activeClassName={nav.active}>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
