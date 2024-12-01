import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  
  function addList(inputText) {
      setListTodo([...listTodo,inputText])
  }

  function handleDelete(item) {
    let newItem = listTodo.filter((itm) => itm !== item);
    setListTodo(newItem);
  }


  return (
    <div className='main-container'>
      <p className='title'>Todo_List</p>
        <div className="center-container">
          <TodoInput handleVal={addList}/>
          {listTodo.map((item,i) => <TodoList key={i} item={item} deleteItem={handleDelete}/>)}
        </div>
    </div>
  )
}

export default App
