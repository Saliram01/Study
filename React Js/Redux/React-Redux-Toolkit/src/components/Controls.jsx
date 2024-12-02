import React from "react";
import { useRef } from "react";
import {useDispatch} from 'react-redux'
import { privacyActions } from "../store/PrivacySlice";
import { actions } from "../store/Slice";

function Controls() {
  const refVal = useRef();
  const dispatch = useDispatch();

  const handleIncreament = (() => {
    dispatch(actions.increment());
  })

  const handleDecreament = (() => {
    dispatch(actions.decrement());
  })

  function handleAdd(){
    dispatch(actions.add(refVal.current.value));
    refVal.current.value = "";
  }

  function handleSub(){
    dispatch(actions.sub(refVal.current.value));
    refVal.current.value = "";
  }

  const handleprivacyToggle = (() => {
    dispatch(privacyActions.toggle());
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
