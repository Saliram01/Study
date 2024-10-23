import React from 'react'

function TodoItems(props) {
    console.log(props);
  return (
    <div style={{display : 'flex', justifyContent : 'space-between',color : 'white',margin : '20px 0',}}>
        <div style={{display : 'flex', alignContent : 'center' ,justifyContent : 'center', gap : '20px',}}>
           {props.completed ? <></> : <input type="checkbox" />}
            <p>{props.title}</p>
        </div>
        <p style={{cursor : 'pointer'}}>...</p>
    </div>
  )
}

export default TodoItems