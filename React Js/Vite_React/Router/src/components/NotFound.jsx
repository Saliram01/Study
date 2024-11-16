import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
        <h1 style={{marginBottom : '10px'}}>404 | Page Not Found</h1>
        <button style={{padding : '5px'}} onClick={() => navigate('/')}>Go to homepage</button>
    </div>
  )
}

export default NotFound