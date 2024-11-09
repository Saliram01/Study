import React from 'react'
import TodoItem from './TodoItem'

function ItemsContainer({Todo,onDeleteClick}) {
    return <>
        {Todo.map((item) => <TodoItem key={item.name} title={item.name} date={item.date} onDeleteClick={onDeleteClick}/>)}
    </>
}

export default ItemsContainer;