import React from "react";
import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";

function AddTodo({onNewItem}) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleNmaeChange(e) {
    setTodoName(e.target.value);
  }

  function handleDateChange(e) {
    setDueDate(e.target.value);
  }

  function handleAddButtonClicked(e) {
    e.preventDefault();
    onNewItem(todoName,dueDate);
    setTodoName('');
    setDueDate('');
  }

  return (
    <div className="container text-center mb-3">
      <form action="" className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input onChange={handleNmaeChange} value={todoName} type="text" placeholder="Add todo list..." className="w-100 py-2 rounded px-2 border-2 border-warning"/>
        </div>
        <div className="col-4">
          <input onChange={handleDateChange} value={dueDate} type="date" className="w-100 py-2 rounded px-2 border-2 border-warning"/>
        </div>
        <div className="col-2">
          <button className="btn btn-outline-success w-100 py-2 border-2">
          <MdLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
