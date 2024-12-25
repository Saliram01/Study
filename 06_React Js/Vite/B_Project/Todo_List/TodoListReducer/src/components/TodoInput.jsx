import React, { useRef } from "react";

function TodoInput({handleVal,handleOnKeyDown}) {
  const ref = useRef();

  function handleOnClick() {
    let refval = ref.current.value;
    handleVal(refval);
    ref.current.value = '';
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your todo..."
        ref={ref}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}

export default TodoInput;
