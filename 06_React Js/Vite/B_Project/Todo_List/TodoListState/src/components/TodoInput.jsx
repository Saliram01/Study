import React, { useRef } from "react";

function TodoInput({ handleVal, handleOnKeyDown }) {
  const ref = useRef();

  function handleOnClick() {
    if (ref.current.value === "") {
      return;
    } else {
      let refval = ref.current.value;
      handleVal(refval);
      ref.current.value = "";
    }
  }

  function handleOnKeyDown(e) {
    if(e.target.value != '') {
      if (e.key === "Enter") {
        handleVal(ref.current.value);
        ref.current.value = "";
      }
    }
    else {return;}
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your todo..."
        ref={ref}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
