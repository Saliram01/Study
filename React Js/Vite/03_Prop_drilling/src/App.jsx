import React from 'react';
import './App.css'
import GreatGrandParent from '../components/GreatGrandParent';

function App() {
  const ggg = 'Hello Great Grand Parent';
  const gp = 'Hello Grand Parents';
  const p = 'Hello Parents';
  const c = 'Hello Bacho';
  return (
    <React.Fragment>
        <GreatGrandParent ggg={ggg} gp={gp} p={p} c={c}/>
    </React.Fragment>
  )
}

export default App
