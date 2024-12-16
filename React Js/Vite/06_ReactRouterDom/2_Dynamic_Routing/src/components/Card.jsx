import React from 'react'

function Card({data}) {

  return (
    <div className='shadow-md hover:border-gray-600 transition-all duration-500 text-center border-2 pb-4 rounded-xl flex flex-col justify-between cursor-pointer items-center h-64'>
        <h1 className='text-2xl p-4'>{data.products[1].title}</h1>
        <img src={data.products[1].thumbnail} alt={data.products[1].title} width={150}/>
    </div>
  )
}

export default Card
