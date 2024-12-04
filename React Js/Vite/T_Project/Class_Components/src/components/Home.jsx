import React from 'react'
import NewCounter from './NewCounter'
import OldCounter from './OldCounter'

function Home() {

  return <>
    <h1 className='text-center font-bold text-2xl mb-4'>Home Page</h1>
    {/* <NewCounter name="New Counter"/> */}
    <OldCounter name="Old Counter"/>
  </>
}

export default Home
