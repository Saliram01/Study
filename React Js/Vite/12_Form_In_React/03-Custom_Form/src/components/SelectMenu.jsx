import React from 'react'

function SelectMenu({ Label, id, name, value, onChange, errors,options ,defaultOption}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{Label}</label>
        
        <select id={id} name={name} className="border border-black" value={value} onChange={onChange}>

         {defaultOption && (<option value="" hidden>{defaultOption}</option>)}

          {options.map((option,i) => <option key={i} value={option}>{option}</option>)}

        </select>
        <p className="error">{errors}</p>
      </div>
  )
}

export default SelectMenu