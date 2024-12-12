import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

function Home() {
  const { name, note } = useContext(ThemeContext);

  return (
    <>
      <h2>{name}</h2>
      <p>{note}</p>
    </>
  );
}

export default Home;
