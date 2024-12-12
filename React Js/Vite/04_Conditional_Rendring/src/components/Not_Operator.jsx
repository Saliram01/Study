import React, { useState } from 'react'

function Not_Operator() {
    const [message, setMessage] = useState(true);
  return (
    <>
        <h1>{message}</h1>
        {
            message ? <h2>True Value</h2> : <h2>False Value</h2>
        } 
        <button onClick={() => setMessage(!message)}>Toggle</button>
    </>
  )
}

export default Not_Operator
