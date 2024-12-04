import React, { useState } from "react";

function Blogs() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Blog Page</h1>
      <button className="bg-blue-400 text-white p-1 rounded" 
      onClick={() => import('../data').then((module) => setTodoList(module.todos))}>
      Load Data</button>
      <ul>
        {todoList.map((list) => <li key={list.id}>{list.id} : {list.title}</li>)}
      </ul>
    </div>
  );
}

export default Blogs;
