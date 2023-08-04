import React from "react";
import Card_Collection from "../../cards/Card_collection";
import "../collection/collection.scss";

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection_items">
        <div className="collection_bg">
          <div className="cards_branch">
            <Card_Collection />
            <Card_Collection />
            <Card_Collection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
