import React from 'react'
import GrandParent from './GrandParent'

function GreatGrandParent({ggg,gp,p,c}) {
  return (
    <div>
      <h1>{ggg}</h1>
      <GrandParent gp={gp} p={p} c={c}/>
    </div>
  )
}

export default GreatGrandParent
