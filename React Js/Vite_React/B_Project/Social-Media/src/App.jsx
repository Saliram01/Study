import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBars from "./components/SideBars";
import { Outlet } from "react-router-dom";
import PostListProvider from "./store/PostListProvider";

function App() {

  return (
    <PostListProvider>
    <div className="app-container">
      <SideBars/>
      <div className="content">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;