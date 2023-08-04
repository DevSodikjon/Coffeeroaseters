import React from "react";
import one from "../../assets/images/01.png";


const ProccessCard = () => {
  return (
    <div className="cad_proccessWW">
      <div className="card_proccess_items">
        <div className="card_proccess_items_img">
          <img src={one} alt="one" />
        </div>

        <div className="card_proccess_contentSSS">
          <h4>Pick your coffee</h4>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProccessCard;
