import React, { useContext } from 'react'
import Card from "./Card";
import LocomotiveScroll from 'locomotive-scroll'
import Loading from './Loading';
import { ContextApi } from '../context/Context';
import { NavLink } from 'react-router-dom';

function Container() {
  const {title, search, data} = useContext(ContextApi);
  const scroll = new LocomotiveScroll();
    
  if(data == '') return <Loading/>

  return (
    <div className='bg-slate-600 min-h-screen text-white'>
      <h1 className="text-center p-8 text-2xl ">{title}</h1>
      <div className="grid grid-cols-auto-fit-minmax gap-8 pb-4 w-full max-w-[1400px] m-auto px-4">
        {data
          .filter((el) => {
            return el.products[1].title.toLowerCase().includes(search);
          })
          .map((el) => {
            return <NavLink key={el.id} to={`/card/${el.products[1].id}`}><Card data={el}/></NavLink>
          })
        }
      </div>
    </div>
  )
}

export default Container
