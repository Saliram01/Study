import React, { useEffect, useState } from "react";
import Card from "./Card";
import Input from "./Input";
import Loading from './Loading'

function CardList() {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCard(data.products);
      });
  }, []);

  return card.length === 0 ? <Loading/> : (
    <>
      <Input setQuery={setSearch} />
      <div className="card-container">
        {card
          .filter((itm) => {
            return itm.brand.includes(search);
          })
          .map((items) => (
            <Card
              key={items.id}
              imageUrl={items.image}
              title={items.title}
              brand={items.brand}
              price={items.price}
            />
          ))}
      </div>
    </>
  );
}

export default CardList;
