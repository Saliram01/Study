import React, { useContext } from 'react'
import { Context_Authenticate } from '../contex_auth/Authenticate'

function Login() {
const {loginWithRedirect } = useContext(Context_Authenticate);

  return (
    <div>
      <button onClick={() => loginWithRedirect()} className='login'>Login</button>
    </div>
  )
}

export default Login
