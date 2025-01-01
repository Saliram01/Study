import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <div className="children-container">
        <Outlet/>
      </div>
    </>
  )
}

export default App
