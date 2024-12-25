import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (btnText) => {
    if (btnText === "C") {
      setCalVal("");
    } else if (btnText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (btnText === "DEL") {
      let remove = calVal.slice(0, -1);
      setCalVal(remove);
    } else {
      const newDisplayValue = calVal + btnText;
      setCalVal(newDisplayValue);
    }
    
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onBtnClick={onButtonClick} />
    </div>
  );
}

export default App;
