import React from 'react'
import './App.css'
import Page1 from './components/Page1'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scroll = new LocomotiveScroll();

  return (
    <div>
      <h1>Locomotive React</h1>
      <div className="">
        <Page1/>
        <Page1/>
        <Page1/>
      </div>
    </div>
  )
}

export default App
