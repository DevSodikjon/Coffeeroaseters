import React from "react";
import cartaImg from "../../assets/images/cartaImg.png";

const BranchCards = () => {
  return (
    <div className="branchCard">
      <div className="branchCard_items">
        <div className="branchCard_items_img">
          <img src={cartaImg} alt="United Kingdom" />
        </div>

        <div className="branchCard_items_content">
          <h3>United Kingdom</h3>
          <p>68 Asfordby Rd</p>
          <p>Alcaston </p>
          <p>SY6 1YA</p>
          <p>+44 1241 918425</p>
        </div>
      </div>
    </div>
  );
};

export default BranchCards;
