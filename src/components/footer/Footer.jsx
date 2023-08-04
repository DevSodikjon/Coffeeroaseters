import React from "react";
import logo from "../../assets/images/logo-light.png";
import "../footer/footer.scss";
import { Link, NavLink } from "react-router-dom";

import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer_items">
            <nav>
              <div className="footer_items_logo">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <ul>
                <li>
                  <NavLink className="navLink">
                    <p>HOME</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink">
                    <p>ABOUT US</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink">
                    <p>Create your plan</p>
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="social">
              <AiFillFacebook className="icons" />
              <BsTwitter className="icons" />
              <AiOutlineInstagram className="icons" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
