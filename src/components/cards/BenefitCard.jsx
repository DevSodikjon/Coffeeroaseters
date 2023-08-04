import React from "react";
import coffeebean from "../../assets/images/coffee-bean.png";
import "../home/benefits/benefits.scss";

const BenefitCard = () => {
  return (
    <div>
      <div className="cardBenefit">
        <div className="card_items">
          <div className="card_img">
            <img src={coffeebean} alt="" />
          </div>

          <div className="card_content">
            <h4>Best quality</h4>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
