import React from 'react'
import './App.css'
import Children from './components/Children'
import ChildrenAttribute from './components/ChildrenAttribute'

function App() {

  return (
    <React.Fragment>
      <h1>Children Props</h1>
      <Children>Pass as a children</Children>
      <ChildrenAttribute children="Pass as a children attribute"/>
    </React.Fragment>
  )
}

export default App
