import React from 'react'
import { MdDelete } from "react-icons/md";

function TodoList({item,deleteItem}) {
  return (
    <li className='listItems'>{item}<span><MdDelete onClick={() => deleteItem(item)}/></span></li>
  )
}

export default TodoList;