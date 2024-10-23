import React from 'react'

function Square(props) {
  return (
    <div onClick={props.onClick} style={{border : '1px solid', height : '100px', width : '100px',display : 'flex',justifyContent : 'center', alignItems : 'center',color : 'white',cursor : 'pointer',}}>
        <h6>{props.value}</h6>
    </div>
  )
}

export default Square