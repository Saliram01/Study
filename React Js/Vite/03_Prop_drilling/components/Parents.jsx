import React from 'react'
import Children from './Children'

function Parents({p,c}) {
  return (
    <div>
      <h1>{p}</h1>
      <Children c={c}/>
    </div>
  )
}

export default Parents
