import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MdAccountCircle } from "react-icons/md";

function UserProfile({setUserprofile}) {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
  return (<>
  <div className="profile-popup" onClick={() => setUserprofile(false)}></div>
    <div className="dropdown">
      <div className="dropdown-header">
        {isAuthenticated ? (
          <img src={user.picture} width={38} alt={user.name} />
        ) : (
          <MdAccountCircle size={40} />
        )}
        <div>
          <h3>{isAuthenticated && user.given_name}</h3>
          <p>{isAuthenticated && user.nickname}</p>
        </div>
      </div>
      <div className="dropdown-item">
        <label htmlFor="theme">Theme:</label>
        <select id="theme">
          <option>☀️ Light</option>
          <option>🌙 Dark</option>
        </select>
      </div>
      <hr />
      <div className="dropdown-footer">
        <div>
          <span>👤</span> Your profile
        </div>
        <hr />
        <div className="a">
          {isAuthenticated ? (
            <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })
          }>↩️ Log out</span>
            
          ) : (
            <span onClick={() => loginWithRedirect()}>
              ↩️ Log In
            </span>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default UserProfile;
