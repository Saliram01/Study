import React ,{useState} from 'react'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import BuggyComponent from './components/BuggyComponents'

function App() {
  const [triggerError, setTriggerError] = useState(false);

  return (
    <div>
      <h1>React ErrorBoundary</h1>
      <button onClick={() => setTriggerError(!triggerError)}>
        Toggle Error
      </button>
      <ErrorBoundary>
        <BuggyComponent triggerError={triggerError} />
      </ErrorBoundary>
    </div>
  );
}


export default App