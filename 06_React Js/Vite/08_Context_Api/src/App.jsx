import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Context } from "./context/Context";

export default function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}
