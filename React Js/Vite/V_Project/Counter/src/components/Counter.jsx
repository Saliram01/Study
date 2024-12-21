import React, { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  // const num = 10;
  function Count() {
    return setInterval(() =>{
        setCount(pre => pre + 1);
    }, 1000)
  }

  useEffect(() => {
    const intervalId = Count();
    return () => {
        clearTimeout(intervalId)
    }
  },[])

  useEffect(() => {
    if(count >= num) {
        // setCount(0)
    }
   
  },[])

  return (
    <>
        <h2>{count}</h2> 
    </>
  )
}

export default Counter
