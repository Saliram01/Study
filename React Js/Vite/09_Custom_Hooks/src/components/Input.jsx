import React, { useContext } from 'react'
import { CountryContext } from '../context/Context'

function Input() {
  const {setSearch,theme} = useContext(CountryContext);
  return (
    <div>
      <input type="text" className={`${theme}`} placeholder='Search for a country' onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}/>
    </div>
  )
}

export default Input
