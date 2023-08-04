import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_itams">
          <div className="header_items_logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="header_itams_anchors">
            <ul>
              <li>
                <NavLink to={"/"} className="navLink">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to={"about"} className="navLink">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to={"crud"} className="navLink">
                  Create your plan
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
