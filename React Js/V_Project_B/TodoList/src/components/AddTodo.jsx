import React from "react";

function AddTodo() {
  return (
    <div className="container text-center mb-3">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Add todo list..." className="w-100 py-2 rounded px-2 border-2 border-warning"/>
        </div>
        <div className="col-4">
          <input type="date" className="w-100 py-2 rounded px-2 border-2 border-warning"/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-success w-100 py-2 border-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
