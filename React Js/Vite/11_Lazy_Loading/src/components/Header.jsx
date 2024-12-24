import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <h2>Lazy Load</h2>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        listStyleType: 'none',
      }}>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} style={{textDecoration: 'none'}} to='/'><li>Home</li></NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} style={{textDecoration: 'none'}} to='about'><li>About</li></NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} style={{textDecoration: 'none'}} to='blogs'><li>Blogs</li></NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} style={{textDecoration: 'none'}} to='contact'><li>Contact</li></NavLink>
      </ul>
    </div>
  )
}

export default Header
