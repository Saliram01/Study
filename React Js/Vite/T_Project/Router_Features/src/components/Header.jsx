import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';

function Header() {
  const [show , setShow] = useState(false);

  return (
    <div className='shadow-md py-4 px-8 flex justify-between items-center'>
        <NavLink to={'/'} className="flex justify-center items-center gap-2">
          <img src={'vite.svg'} alt="vite" />
          <span className='font-bold text-slate-400'>Vite</span>
          </NavLink>
        <ul className='flex space-x-8 justify-center items-center'>
            <NavLink to={'/'} className={({isActive}) => isActive ? 'underline text-blue-400' : ''}>Home</NavLink>   
            <NavLink to={'about'} className={({isActive}) => isActive ? 'underline  text-blue-400' : ''}>About</NavLink>
            <NavLink to={'blogs'} className={({isActive}) => isActive ? 'underline  text-blue-400' : ''}>Blog</NavLink>
            <NavLink to={'contact'} className={({isActive}) => isActive ? 'underline  text-blue-400' : ''}>Contact</NavLink>
            <li>
              <button onClick={() => setShow(true)} className='bg-green-500 p-1 px-4 rounded-full text-white'>Sign In</button>
              <Modal show={show} setShow={setShow}/>
            </li>
        </ul>
    </div>
  )
}

export default Header
