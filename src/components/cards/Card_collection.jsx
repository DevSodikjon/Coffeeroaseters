import React from "react";
import paket from "../../assets/images/paket.png";
import "../../assets/images/collection.png";

const Card_Collection = () => {
  return (
    <div>
      <div className="card">
        <div className="card_content">
          <div className="card_img">
            <img src={paket} alt="paket" />
          </div>
          <div className="card_content">
            <h3>Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Collection;
