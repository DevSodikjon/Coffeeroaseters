import React from "react";
import ProccessCard from "../../cards/ProccessCard";
import "../hero/heroCrud.scss";

const HeroCrud = () => {
  return (
    <div className="heroCrudSSS">
      <div className="heroCrudSSS_items">
        <div className="heroCrud_items_content">
          <div className="content_text">
            <h2>Create a plan</h2>
            <p>
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </div>
        <div className="proccessCrud">
          <div className="proccessCrud_items">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCrud;
