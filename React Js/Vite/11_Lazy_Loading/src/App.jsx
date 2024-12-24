import { Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div style={{padding: '0 30px'}}>
      <Header/>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', textAlign: 'center'}}>
          <Outlet/>
        </div>
    </div>
  )
}

export default App;
