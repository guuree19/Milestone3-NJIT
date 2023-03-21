import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveClose, setisResponsiveClose] = useState(false);
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);


  const toggleClass = () => {
    setisMenu(!isMenu);
    setisResponsiveClose(!isResponsiveClose);
  };

  const toggleSubmenu = () => {
    setMenuSubMenu(!isMenuSubMenu);
  };

  let boxClass = ["nav__container"];
  if (isMenu) {
    boxClass.push("responsive__nav__show");
  } else {
    boxClass.push("");
  }

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <div className="nav">
      <div className="nav__header">
        <span
          className="menubar__button"
          onClick={toggleClass}
        >
          <i className={isMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </span>
      </div>
      <ul className={boxClass.join(" ")}>
        <li>
          <NavLink onClick={toggleClass} className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleSubmenu}
            className="nav-link"
            activeClassName="active"
            to="/About"
          >
            About
          </NavLink>
          <ul className={boxClassSubMenu.join(" ")}>
            <li>
              <NavLink
                onClick={toggleClass}
                className="nav-link"
                activeClassName="active"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleClass}
                className="nav-link"
                activeClassName="active"
                to="/Projects"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink onClick={toggleClass} className="nav-link" to="/Blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleClass} className="nav-link" to="/Services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleClass} className="nav-link" to="/Resume">
            Resume/CV
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
