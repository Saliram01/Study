import React, { useState } from 'react';

const If_Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back, User!</h1>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please log in</h1>
        <button onClick={handleLogin}>Log in</button>
      </div>
    );
  }
};

export default If_Conditional;
