import React from "react";
import "../hero/hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_items">
        <div className="hero_items_content">
          <div className="content_text">
            <h2>Great coffee made simple.</h2>
            <p>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <button className="CreateYourPlan">Create your plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
