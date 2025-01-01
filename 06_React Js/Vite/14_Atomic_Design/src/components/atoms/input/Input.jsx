import React from 'react'

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '10px', margin: '5px', width: '200px' }}
    />
  )
}

export default Input
