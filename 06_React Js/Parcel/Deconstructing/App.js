import React from './react'
import { render } from './react-dom'
import './App.css'

const App = () => {
  return (
    <div>
        <h2 style={{textAlign: 'center', color: 'green'}} >App</h2>
    </div>
  )
}

export default App 

render(<App/>, document.getElementById('root'));