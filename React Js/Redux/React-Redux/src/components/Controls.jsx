import React from "react";
import { useRef } from "react";
import {useDispatch} from 'react-redux'

function Controls() {

  const refVal = useRef();
  
  function handleAdd(){
    const currentVal = refVal.current.value;
    dispatch({type: 'ADD', payload: {num: currentVal}})
    refVal.current.value = "";
  }

  function handleSub(){
    const currentVal = refVal.current.value;
    dispatch({type: 'SUB', payload: {num: currentVal}})
    refVal.current.value = "";
  }

  const dispatch = useDispatch();

  const handleIncreament = (() => {
    dispatch({type : 'INCREMENT'});
  })

  const handleDecreament = (() => {
    dispatch({type : 'DECREMENT'});
  })

  const handleprivacyToggle = (() => {
    dispatch({type: 'PRIVACY'});
  })

  return (<>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-2">
        <button onClick={handleDecreament} type="button" className="btn btn-primary">Decrease</button>
        <button onClick={handleIncreament} type="button" className="btn btn-secondary">Increase</button>
        <button onClick={handleprivacyToggle} type="button" className="btn btn-warning">Privacy Toggle</button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-2">
        <input ref={refVal}  type="text" className="rounded border text-center field" placeholder="Enter num" required/>
        <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
        <button onClick={handleSub} type="button" className="btn btn-danger">Sub</button>
    </div>
    </>
  );
}

export default Controls;
