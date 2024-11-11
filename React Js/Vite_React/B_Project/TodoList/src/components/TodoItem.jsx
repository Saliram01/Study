import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore";

function TodoItem({ title, date }) {
  const {deleteItems} = useContext(TodoItemsContext);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6 text-start">{title}</div>
        <div className="col-4 text-start">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-danger my-1 w-100"
            onClick={() => deleteItems(title)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
