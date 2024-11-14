import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState(['Apple']);

function onKeyDown(e) {
  if(e.key === 'Enter') {
    let newFoodItem = e.target.value;
    e.target.value = '';
    let newItems = [...foodItems,newFoodItem];
    setFoodItems(newItems);
  }
}

  return (
    <>
      <Container>
        <h2 className="title">Healthy Foods</h2>
        <FoodInput handleKeyDown={onKeyDown}/>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
