import React, { useContext } from 'react'
import Input from './Input'
import Filter from './Filter'
import { CountryContext } from '../context/Context'

function Navigation() {
  const {theme} = useContext(CountryContext);

  return (
    <div className="navigation">
        <Input theme={theme}/>
        <Filter theme={theme}/> 
      </div>
  )
}

export default Navigation
