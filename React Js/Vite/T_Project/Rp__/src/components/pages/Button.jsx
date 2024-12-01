import React from 'react'

function Button(props) {
  return (
    <button className='py-2 w-52 rounded-full border border-indigo-500 transition-all delay-75 hover:bg-indigo-400 text-purple-800 hover:text-white'>{props.title}</button>
  )
}

export default Button