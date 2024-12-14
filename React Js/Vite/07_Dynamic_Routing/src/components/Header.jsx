import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { ContextApi } from "../context/Context";

function Header() {
  const {setSearch} = useContext(ContextApi);
  const [show,setShow] = useState('Active');

  return ( 
    <div className="w-full bg-slate-600 text-white shadow shadow-white sticky top-0 z-10">
      <div className="flex h-16 w-full max-w-[1400px] m-auto px-4 justify-center items-center">

        <NavLink to={'/'} className="mr-auto text-xl font-bold"><h2 >Products</h2></NavLink>

        <div >
            <input type="text" 
            className="border rounded-full w-full max-w-32 mx-6 px-3 py-1 outline-yellow-600 text-gray-500" placeholder="Search" 
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}/>
          </div>

        <ul className="hidden sm:flex justify-center items-center gap-8 font-semibold">
          <NavLink onClick={()=> setShow('Active')} className={({isActive}) => `${isActive ? 'text-green-400' : ''}`} to={'/'}> <li>Home</li> </NavLink>
          <NavLink onClick={()=> setShow('Active')} className={({isActive}) => `${isActive ? 'text-green-400' : ''}`} to={'about'}> <li>About</li> </NavLink>
          <NavLink onClick={()=> setShow('Active')} className={({isActive}) => `${isActive ? 'text-green-400' : ''}`} to={'blogs'}> <li>Blogs</li> </NavLink>
          <NavLink onClick={()=> setShow('isActive')} className={({isActive}) => `${isActive ? 'text-green-400' : ''}`} to={'products'}> <li>Products</li> </NavLink>
        </ul>

        <span className="sm:hidden text-2xl"><RiMenu3Line/></span>
        
      </div>
    </div>
  );
}

export default Header;
