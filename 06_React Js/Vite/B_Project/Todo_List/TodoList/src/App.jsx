import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ItemsContainer from "./components/ItemsContainer";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/TodoItemsStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="border w-50 p-3 m-auto mt-5 bg-white shadow-lg">
        <AppName title="Dodo React App" />
        <AddTodo />
        <WelcomeMsg />
        <div className="items-container">
          <ItemsContainer />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
  