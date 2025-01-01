import React, { useContext } from 'react'
import { Context_Authenticate } from '../contex_auth/Authenticate';

function Logout() {
  const {logout} = useContext(Context_Authenticate);

  return (
    <div>
      <button onClick={() => logout({returnTo: window.location.origin})} className='logout'>Log out</button>
    </div>
  )
}

export default Logout
