import React from 'react'
import userIcon from '../images/user.png'
import { useAuth0} from '@auth0/auth0-react'

function UserIcon() { 
  const { isAuthenticated , user} = useAuth0();
  return (
    <div>
      <img className='chat-icon' src={isAuthenticated ? user.picture : userIcon} alt="User"/>
    </div>
  )
}

export default UserIcon
