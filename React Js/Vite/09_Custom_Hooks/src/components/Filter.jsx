import React, { useContext } from 'react'
import { CountryContext } from '../context/Context'

function Filter() {
  const {data, region, setRegion, theme} = useContext(CountryContext);
  return (
    <div>
      <select className={`${theme}`} value={region} onChange={(e) => setRegion(e.target.value)}>
        <option hidden>Filter by region</option>
        {
          data[0].map((filt) => <option value={filt.region} key={filt.name.common}>{filt.region}</option>)
        }
      </select>
    </div>
  )
}

export default Filter
