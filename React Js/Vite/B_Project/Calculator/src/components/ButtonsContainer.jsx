import React from "react";
import styles from "./Buttons.module.css";

function ButtonsContainer({onBtnClick}) {
  const buttons = [
    "C",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "0",
    "00",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((btnName) => (
        <button key={btnName} className={styles.button} onClick={() => onBtnClick(btnName)}>
          {btnName}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
