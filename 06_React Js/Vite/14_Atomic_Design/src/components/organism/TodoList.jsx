import React from 'react'
import TodoItems from '../molecules/TodoItems'

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default TodoList
