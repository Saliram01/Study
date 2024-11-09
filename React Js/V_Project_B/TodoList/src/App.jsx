import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ItemsContainer from "./components/ItemsContainer";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const [addTodoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDueDate) => {
      const newTodoItems = [...addTodoItems,{name : itemName, date: itemDueDate}];
      setTodoItems(newTodoItems)
  }

  function handleDeleteItems(TodoItemName) {
    const newTodoItems = addTodoItems.filter((itm) =>itm.name != TodoItemName)
    setTodoItems(newTodoItems);
  }
  

  return (
    <center className="border w-50 p-3 m-auto mt-5 bg-white shadow-lg">
      <AppName title="Dodo React App" />
      <AddTodo onNewItem={handleNewItem}/>
      {addTodoItems.length === 0 && <WelcomeMsg/>}
      <div className="items-container">
        <ItemsContainer Todo={addTodoItems} onDeleteClick={handleDeleteItems}/>
      </div>
    </center>
  );
}

export default App;
