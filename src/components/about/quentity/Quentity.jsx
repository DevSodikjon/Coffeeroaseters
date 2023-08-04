import React from "react";
import "../quentity/quentity.scss";
import coffeTime from "../../../assets/images/coffeeTime.png"

const Quentity = () => {
  return (
    <div className="quentity">
      <div className="quentity_items">
        <div className="quentity_items_content">
          <h3>Uncompromising quality</h3>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>

        <div className="quantity_items_img">
            <img src={coffeTime} alt="coffee" />
        </div>
      </div>
    </div>
  );
};

export default Quentity;
