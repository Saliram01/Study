import React from 'react'

function Input({setQuery}) {
  return (
    <div className='input-field'>
        <input type="text" placeholder='Search product...' onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
    </div>
  )
}

export default Input