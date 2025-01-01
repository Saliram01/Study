import React, { useContext } from 'react'
import { Context_Authenticate } from '../contex_auth/Authenticate';

function Home() {
  const {user, isAuthenticated, isLoading, error} = useContext(Context_Authenticate);

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>{user.error}</div>
  }
  
  return (
    <div>
      {
        isAuthenticated && (
          <div className='user-details'>
            <h3 style={{border: '1px solid', borderRadius: '5px', marginBottom: '10px', padding: '4px'}}>{user.name}</h3>
            <h4 style={{border: '1px solid', borderRadius: '5px', marginBottom: '10px', padding: '4px'}}>{user.nickname}</h4>
            <h4 style={{border: '1px solid', borderRadius: '5px', marginBottom: '10px', padding: '4px'}}>{user.sub}</h4>
            <h4 style={{border: '1px solid', borderRadius: '5px', marginBottom: '10px', padding: '4px'}}>{user.updated_at}</h4>
            <img src={user.picture}/>
          </div>
        )
      }
    </div>
  )
}

export default Home
