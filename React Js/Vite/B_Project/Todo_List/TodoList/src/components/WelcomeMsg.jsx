import React from 'react'
import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsStore'

function WelcomeMsg() {
  const {addTodoItems} = useContext(TodoItemsContext);
  return addTodoItems.length === 0 && <p className='fs-4 mt-4 fw-semibold'>Enjoy Your Day</p>
}

export default WelcomeMsg