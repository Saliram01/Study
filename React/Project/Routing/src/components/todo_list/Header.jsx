import React from 'react'

function Header(props) {
  return (
    <h3 style={{color : 'white',textAlign : 'center'}}>{props.title}</h3>
  )
}

export default Header