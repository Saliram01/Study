import React, { useState } from 'react'

function Card({list, theme}) {
  return (
    <div className={`card-container ${theme}`}>
        <img src={list.flags.svg} alt="Images" />
        <div className="detail">
            <h2>{list.name.common}</h2>
            <p><b>Population</b>: {list.population}</p>
            <p><b>Region</b>: {list.region}</p>
            <p><b>Capital</b>: {list.capital}</p>
        </div>
    </div>
  )
}

export default Card
