import React from 'react'
import Header from './Header'
import Button from './Button'
import TodoItems from './TodoItems'

function Todo() {
  return (
    <div style={{display : 'flex',justifyContent :'center',alignItems : 'center',margin :'50px 0'}}>
        <div style={{width : '300px', border : '2px solid white',padding : '20px',borderRadius : '10px'}}>
          <Header title = 'Todo_List'/>
          <TodoItems completed={true} title = 'Eat'/>
          <TodoItems title = 'Code'/>
          <TodoItems title = 'Sleep'/>
          <TodoItems title = 'Play'/>
          <TodoItems title = 'Repeat'/>
          <Button/>
        </div>
    </div>
  )
}

export default Todo