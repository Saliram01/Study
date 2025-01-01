import React, { createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Context_Authenticate = createContext();

function Authenticate({children}) {
    const {loginWithRedirect, logout, isAuthenticated, user, isLoading, error} = useAuth0();
  return (
    <Context_Authenticate.Provider value={{loginWithRedirect, logout, isAuthenticated, user, isLoading , error}}>
        {children}
    </Context_Authenticate.Provider>
  )
}

export default Authenticate
