import React, { useContext } from 'react'
import { ContextApi } from '../Context/Context'

function Profile() {
  const {phone,count,setCount} = useContext(ContextApi);
  
  return (
    <>
        <p className='text-center text-2xl'>{count}</p>
        <button className='border-2 my-4 active:border-gray-400 rounded-full' onClick={() => setCount(count + 1)}>Increase</button>
        <h1>Profile : {phone}</h1>
    </>
  )
}

export default Profile