import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  function handleAddButtonClicked(e) {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = '';
    dueDateElement.current.value = '';
    addNewItem(todoName,dueDate);
  }

  return (
    <div className="container text-center mb-3">
      <form action="" className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input ref={todoNameElement} type="text" placeholder="Add todo list..." className="w-100 py-2 rounded px-2 border-2 border-warning"/>
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date" className="w-100 py-2 rounded px-2 border-2 border-warning"/>
        </div>
        <div className="col-2">
          <button className="btn btn-outline-success min-w-100 py-2 border-2">
          <MdLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
