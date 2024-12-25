import React from 'react'
import { NavLink , replace, useNavigate } from 'react-router-dom';

function Header() {
  const navigation = useNavigate();
  return (
    <div className='navbar'>
        <h2 className='logo'>Router</h2>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/product"><li>Product</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/jobs"><li>Jobs</li></NavLink>
        </ul>
        <button onClick={() => navigation('/product', {replace : true})}>Get Started</button>
    </div>
  )
}

export default Header;