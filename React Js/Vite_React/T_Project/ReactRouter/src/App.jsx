import React, { useReducer } from 'react'

function App() {

  const initialValue = {count : 0};

  const reducer = (state, action) => {
 
    // if(action.type === 'inc') {
    //   state < 10 ? state = state + 1 : state;
    // }

    // if(action.type === 'dec') {
    //   state > 0 ? state = state - 1 : state;
    // }
    // return state;

    // OR

    switch(action.type) {
      case 'inc' : {
        return {count : state.count + 1};
      }
        break;
      case 'dec' : {
        return {count : state.count - 1};
      }
        break;
      case 'input' : {
        return { count : action.payload}
      }
      default : return state;
    }
  }

  const [state , dispatch] = useReducer(reducer,initialValue)

  return (
    <div className='bg-slate-600 font-bold text-white text-2xl h-screen flex flex-col justify-center items-center'>
      <h1 className='my-8'>useReducer hook exmample</h1>
      <h2 className='mb-8 text-4xl'>{state.count}</h2>
      <div>
          <button className='border-2 p-2 ml-2 rounded' onClick={() => dispatch({type: 'inc'})}>Increament</button>
          <button className='border-2 p-2 ml-2 rounded' onClick={() => dispatch({type: 'dec'})}>Decreament</button>
      </div>
      <input type="number" className='my-4 outline-0 bg-transparent border rounded py-2 text-center' 
      value={state.count} onChange={(e) => dispatch({type : 'input', payload : Number(e.target.value)})}/>
      
    </div>
  )
}

export default App