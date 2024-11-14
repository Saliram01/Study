import { useReducer } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const reducer = (currentState, action) => {
    let newItemList = currentState;

    if(action.type === 'ADD_LIST') {
      newItemList = [...currentState,action.payload.list];
    }

    else if(action.type === 'DEL_LIST') {
      newItemList = currentState.filter((list) => list != action.payload.itemName);
    }

    return newItemList;
  }

  const [state, dispatch] = useReducer(reducer,[]);

  const handleVal = (list) => {
    dispatch({
      type : 'ADD_LIST',
      payload : {list}
    })
  }

  const handleOnKeyDown = (e) => {
    if(e.key === 'Enter'){
      let list = e.target.value;
      dispatch({
        type : 'ADD_LIST',
        payload : {list}
      })
      e.target.value = '';
    }
  }

  const handleDelete = (itemName) => {
    dispatch({
      type : 'DEL_LIST',
      payload : {itemName}
    })
  }
 
  return (
    <div className='main-container'>
      <p className='title'>Todo_List</p>
        <div className="center-container">
          <TodoInput handleVal={handleVal} handleOnKeyDown={handleOnKeyDown}/>
          {state.map((item,i) => <TodoList key={i} item={item} deleteItem={handleDelete}/>)}
        </div>
    </div>
  )
}

export default App
