import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
 const count = useSelector(state => state);
  return <div>{count}</div>
}
