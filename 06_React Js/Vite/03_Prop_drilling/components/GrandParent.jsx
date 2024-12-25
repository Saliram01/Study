import React from 'react'
import Parents from './Parents'

function GrandParent({gp,p,c}) {
  return (
    <div>
      <h1>{gp}</h1>
      <Parents p={p} c={c}/>
    </div>
  )
}

export default GrandParent
