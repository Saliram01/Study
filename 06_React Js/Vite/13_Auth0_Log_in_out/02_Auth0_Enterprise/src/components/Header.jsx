import React, { createContext, useContext } from "react";
import Login from './Login'
import Logout from "./Logout";
import { NavLink } from "react-router-dom"
import { Context_Authenticate } from "../contex_auth/Authenticate";

function Header() {
    const { isAuthenticated } = useContext(Context_Authenticate);

  return (
    <header>
      <div className="header-container">
        <h2>Auth0</h2>
        <ul>
          <NavLink onClick={({isActive}) => isActive ? '.active' : ''} style={{textDecoration: 'none', }} to="/"><li>Home</li></NavLink>
          <NavLink onClick={({isActive}) => isActive ? '.active' : ''} style={{textDecoration: 'none', }} to="about" ><li>About</li></NavLink>
          <NavLink onClick={({isActive}) => isActive ? '.active' : ''} style={{textDecoration: 'none', }} to="blogs"><li>Blogs</li></NavLink>
          <NavLink onClick={({isActive}) => isActive ? '.active' : ''} style={{textDecoration: 'none', }} to="contact" ><li>Contact</li></NavLink>
          
        </ul>
        {isAuthenticated ? <Logout/> : <Login />}
      </div>
    </header>
  );
}

export default Header;
