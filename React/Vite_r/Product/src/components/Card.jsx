import React, { useEffect, useState } from "react";
import Input from "./Input";

function Card() {
  const [card, setCard] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCard(data.products);
      });
  }, []);

  return (
    <>
      <Input setQuery={setSearch}/>
      <div className="card-container">
        {card.filter((itm) => {
            return itm.brand.includes(search);
        }).map((items) => {
          return (
            <div className="card" key={items.id}>
              <img src={items.image} alt={items.title} height={150} />
              <h3>{items.brand}</h3>
              <p>price : {items.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
