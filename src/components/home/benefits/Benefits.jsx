import React from "react";
import "../benefits/benefits.scss";
import BenefitCard from "../../cards/BenefitCard";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits_items">
        <div className="benefits_items_about">
          <div className="benefits_items_about_content">
            <h4>Why choose us?</h4>
            <p>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>

          <div className="benefitCards_bramch">
            <BenefitCard />
            <BenefitCard />
            <BenefitCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
