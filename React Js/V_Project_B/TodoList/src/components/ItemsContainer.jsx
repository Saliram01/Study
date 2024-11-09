import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";

function ItemsContainer() {
    const {addTodoItems} = useContext(TodoItemsContext);
  return (
    <>
      {addTodoItems.map((item) => (
        <TodoItem
          key={item.name}
          title={item.name}
          date={item.date}
        />
      ))}
    </>
  );
}

export default ItemsContainer;
