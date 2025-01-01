import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <React.Fragment>
      <div className="container">

        {isAuthenticated && <div style={{marginBottom: '10px', border: '1px solid', padding: '15px'}}>
       <div> <span style={{fontWeight: 'bold', color: 'lightgreen'}}>Verified: </span>{user.email_verified}</div>
        <div><span style={{fontWeight: 'bold', color: 'lightgreen'}}>Name: </span>{user.name}</div>
        <div><span style={{fontWeight: 'bold', color: 'lightgreen'}}>Nickname: </span>{user.nickname}</div>
        <div><span style={{fontWeight: 'bold', color: 'lightgreen'}}>Gmail: </span>{user.email}</div>
        <div><span style={{fontWeight: 'bold', color: 'lightgreen'}}>Sub: </span>{user.sub}</div>
        <div><span style={{fontWeight: 'bold', color: 'lightgreen'}}>Updated_at: </span>{user.updated_at}</div>
        <div><img src={user.picture} alt="" /></div>
        </div>}

        {isAuthenticated ? (
          <button onClick={(e) => logout({logoutParams: {returnTo:window.location.origin}})}>Logout</button>
        ) : (
          <button onClick={(e) => loginWithRedirect()}>Login</button>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
