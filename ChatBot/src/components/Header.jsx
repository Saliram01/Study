import React, { useState } from 'react'
import { CgMenuBoxed } from "react-icons/cg";
import { MdAccountCircle } from "react-icons/md";
import { useAuth0 } from '@auth0/auth0-react';
import UserProfile from './UserProfile';

export default function Header({setChatHistory, setShowResponse}) {
  const { isAuthenticated, user } = useAuth0();

  const [userProfile, setUserprofile] = useState(false);
  const handleClear = () => {
    setChatHistory(() => []);
  }

  const handleHuddenShow = () => {
    setShowResponse(prev => !prev);
  }

  return (
    <div className='header-container'>
      <div className='title-container'>
        <CgMenuBoxed size={30} style={{cursor:'pointer'}} onClick={handleHuddenShow}/>
        <h2 className='title'>Chatbot</h2>
      </div>
      {userProfile ? <UserProfile setUserprofile={setUserprofile}/> : ''}
      <div className='profile-container'>
        <button onClick={handleClear}>New Chat</button>
        <div className='profile' onClick={() => setUserprofile(prev => !prev)}>
          {isAuthenticated ? <img src={user.picture} width={38} /> : <MdAccountCircle />}
        </div>
      </div>
    </div>
  )
}
