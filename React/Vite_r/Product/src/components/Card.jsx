import React from "react";

function Card({ id, imageUrl, title, brand, price }) {
  return (
    <div className="card" key={id}>
      <img src={imageUrl} alt={title} height={150} />
      <h3>{brand}</h3>
      <p>price : {price}</p>
    </div>
  );
}

export default Card;
