import React, { useState } from "react";

function Ternary_Operator() {
  const [isLogin, setIslogin] = useState(false);

  function handleLogIn() {
    setIslogin(true);
  }

  function handleLogOut() {
    setIslogin(false);
  }

  return (
    <>
        {
            isLogin ? <div>
                            <h2>Welcome Back User!!</h2>
                            <button onClick={handleLogOut}>Login</button>
                      </div>
                    : 
                      <div>
                        <h2>User Login Success</h2>
                        <button onClick={handleLogIn}>LogOut</button>
                      </div>
        }
    </>
  )
  
}

export default Ternary_Operator;
