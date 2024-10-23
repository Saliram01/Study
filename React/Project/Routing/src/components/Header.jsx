import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to={'/'} style={{textDecoration : 'none'}}>
        <h2>Profile</h2>
      </Link>
      <ul>
        <li className='list'>
          <NavLink to={'/'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Home
          </NavLink>
        </li> 
              
        <li className='list'>
          <NavLink to={'/about'} className={({isActive}) => `${isActive ?'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            About
          </NavLink>
        </li> 

        <li className='list'>
          <NavLink to={'/github'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Github
          </NavLink>
        </li>

        <li className='list'>
          <NavLink to={'/services'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Services
          </NavLink>
        </li>

        <li className='list'>
          <NavLink to={'/todo'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Todo
          </NavLink>
        </li>

        <li className='list'>
          <NavLink to={'/ttt'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Ttt
          </NavLink>
        </li>

        <li className='list'>
          <NavLink to={'/state'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
           State
          </NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Header