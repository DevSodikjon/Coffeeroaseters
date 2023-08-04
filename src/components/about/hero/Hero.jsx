import React from "react";
import "../hero/heroAbout.scss";

const Hero = () => {
  return (
    <div className="heroAbout">
      <div className="heroAbout_items">
        <div className="heroAbout_items_content">
          <div className="content_text">
            <h2>About Us</h2>
            <p>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
