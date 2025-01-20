import React from 'react'

function Card({title,price, description, img}) {

  return (
    <div className='card'>
        <img src={img} />
        <h3>{title}</h3>
        <h3>${price}</h3>
    </div>
  )
}

export default Card;
