import React from 'react'
import Checkbox from '../atoms/checkbox/Checkbox'
import Button from '../atoms/button/Button'

function TodoItems({ todo, onToggle, onRemove }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          margin: '0 10px',
        }}
      >
        {todo.text}
      </span>
      <Button onClick={() => onRemove(todo.id)}>Remove</Button>
    </div>
  )
}

export default TodoItems
