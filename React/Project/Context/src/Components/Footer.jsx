import React, { useContext } from 'react'
import { ContextApi } from '../Context/Context'

function Footer() {
  const {phone} = useContext(ContextApi);

  return (
    <>
      <h1>Footer : {phone}</h1>
    </>
  )
}
export default Footer