import React from "react";
import "../branch/branch.scss";
import BranchCards from "../../cards/BranchCards";

const Branch = () => {
  return (
    <div className="branchs">
      <div className="branchs_items">
        <div className="branchs_items_title">
          <h3>Our headquarters</h3>
        </div>

        <div className="branchCard_group">
          <BranchCards />
          <BranchCards />
          <BranchCards />
        </div>
      </div>
    </div>
  );
};

export default Branch;
