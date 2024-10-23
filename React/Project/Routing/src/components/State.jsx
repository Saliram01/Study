import React, { useState } from 'react'

export function State() {
    const [count , setCount] = useState(0);

    function handleClick(){
        setCount(count + 1)
    }

  return (
    <div style={{display : 'flex',flexDirection : 'column', padding : '200px 300px'}}>
        <Button count={count} onClick={handleClick}/>
        <Button count={count} onClick={handleClick}/>
    </div>
  )
}

function Button({onClick,count}){
    return(<button onClick={onClick} style={{padding : '10px 0'}}>Clicked {count} times</button>)
}