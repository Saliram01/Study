import React, { useEffect, useState } from 'react'

function Counter({name}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Mounting")
      const timerId = setInterval(() => {
        console.log("Functional Counter");
      },2000)

      return () => {
        clearInterval(timerId);
        console.log("Unmounting")
      }

    },[count])

  return (<>
    <h1 className='text-center'>{name}</h1>
    <div className='pt-4 flex items-center justify-center gap-4'>
      <button className='bg-gray-400 p-1 rounded w-[50px]' onClick={() => setCount(prev => prev - 1)}>-</button>
      <h1 className='text-2xl w-[30px] text-center'>{count}</h1>
      <button className='bg-green-400 p-1 rounded w-[50px]' onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
    </>
  )
}

export default Counter
