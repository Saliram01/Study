import React from "react";
import Items from "./Items";
import { useState } from "react";

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  function onBuyButton(item) {
    let newitems = [...activeItems, item];
    setActiveItems(newitems);
  }
  
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            list={item}
            bought={activeItems.includes(item)}
            handleBuy={() => onBuyButton(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
