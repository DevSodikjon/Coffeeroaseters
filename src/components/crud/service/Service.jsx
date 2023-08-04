import React from "react";
import "../service/service.scss";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Coffee from "../../cards/Coffee";

const Service = () => {
  return (
    <div className="service">
      <div className="service_items">
        <div className="service_items_table">
          <ul>
            <li>
              <NavLink className="navService">
                <p>01</p>
                <p>Preferences</p>
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink className="navService">
                <p>02</p>
                <p>Bean Type</p>
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink className="navService">
                <p>03</p>
                <p>Quantity</p>
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink className="navService">
                <p>04</p>
                <p>Grind Option</p>
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink className="navService">
                <p>05</p>
                <p>Deliveries</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="service_items_services">
          <div className="first">
            <div className="title">
              <h3>How do you drink your coffee?</h3>
              <MdKeyboardArrowDown className="arrowUp" />
            </div>

            <div className="coffe_card">
              <Coffee />
              <Coffee />
              <Coffee />
            </div>
          </div>
          <div className="first">
            <div className="title">
              <h3>How do you drink your coffee?</h3>
              <MdKeyboardArrowDown className="arrowUp" />
            </div>

            <div className="coffe_card">
              <Coffee />
              <Coffee />
              <Coffee />
            </div>
          </div>
          <div className="first">
            <div className="title">
              <h3>How do you drink your coffee?</h3>
              <MdKeyboardArrowDown className="arrowUp" />
            </div>

            <div className="coffe_card">
              <Coffee />
              <Coffee />
              <Coffee />
            </div>
          </div>
          <div className="first">
            <div className="title">
              <h3>How do you drink your coffee?</h3>
              <MdKeyboardArrowDown className="arrowUp" />
            </div>

            <div className="coffe_card">
              <Coffee />
              <Coffee />
              <Coffee />
            </div>
          </div>
          <div className="first">
            <div className="title">
              <h3>How do you drink your coffee?</h3>
              <MdKeyboardArrowDown className="arrowUp" />
            </div>

            <div className="coffe_card">
              <Coffee />
              <Coffee />
              <Coffee />
            </div>
          </div>

          <div className="comment">
            <p className="order">Order Summary</p>
            <p className="commentp">
              “I drink my coffee as <span>Filter</span> , with a{" "}
              <span>Decaf</span> type of bean. <span>250g</span>
              ground ala <span>Cafetiére</span> , sent to me{" "}
              <span>Every Week</span>.”
            </p>
          </div>

          <button className="CreateYourPlan">Create your plan</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
