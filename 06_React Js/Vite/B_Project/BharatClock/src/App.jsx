import React from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSologon from './components/ClockSologon'
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <div className='text-center'>
      <ClockHeading/>
      <ClockSologon/>
      <CurrentTime/>
    </div>
  )
}

export default App