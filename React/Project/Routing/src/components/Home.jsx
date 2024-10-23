import React, { useEffect, useRef, useState } from 'react'

function Home() {
  const [count ,setCount] = useState(0);
  const num = useRef(0);
  
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    },1000)
  },[])
  
  useEffect(() => {
    num.current = num.current + 1
  })

  // function f1(){
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  // }

  return (
    <div className="home" style={{display : 'flex', flexDirection : 'column', gap : '10px'}}>
      <h3>{count}</h3>
      <h2 style={{color : '#ffffff'}}>Render Count : {num.current}</h2>
      {/* <button onClick={f1}>Click</button> */}
    </div>
  )
}

export default Home