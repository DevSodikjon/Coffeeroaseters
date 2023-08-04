import React from "react";
import ProccessCard from "../../cards/ProccessCard";
import "../../home/proccess/proccessMe.scss";

const Proccess = () => {
  return (
    <div className="proccessHero">
      <div className="proccess_items">
        <div className="title">
          <p>How it works</p>
        </div>
        <div className="proccessLine">
          <div className="round"></div>
          <div className="hr"></div>
          <div className="round"></div>
          <div className="hr"></div>
          <div className="round"></div>
        </div>

        <div className="proccess_card">
          <ProccessCard />
          <ProccessCard />
          <ProccessCard />
        </div>
        <button className="CreateYourPlan">Create your plan</button>
      </div>
    </div>
  );
};

export default Proccess;
