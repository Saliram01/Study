import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to={'counter'} style={{textDecoration: 'none'}}>
        <h2>Go to counter</h2>
      </Link>
    </>
  )
}

export default App
