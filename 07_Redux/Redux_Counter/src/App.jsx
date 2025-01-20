import './App.css';
import Counter from './components/Counter';
import {useDispatch}  from 'react-redux';

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={(e) => dispatch({type: 'INCREASE'})}>Increase</button>
        <Counter/>
      <button onClick={(e) => dispatch({type: 'DECREASE'})}>Decrease</button>
    </>
  )
}

export default App
