import React from 'react'
import {createPortal} from 'react-dom'

function Modal({show , setShow}) {

  return (
    createPortal(
      <div onClick={() => setShow(false)} className={`flex justify-center items-center bg-[rgba(0,0,0,0.5)] fixed w-[100vw] top-0 right-0 h-[100vh] ${show ? '' : 'hidden'}`}>
    <div onClick={(e) => e.stopPropagation()} className='shadow-lg border-2 rounded w-[100%] max-w-[35%] bg-white'>
        <h1 className='py-2 border-b px-4 font-bold font-serif'>Sign In</h1>
        <div className="flex justify-between items-center px-4 gap-4 py-6">
            <input type="text" className='border-2 rounded w-full py-1 px-2' placeholder='Username'/>
            <input type="text" className='border-2 rounded w-full py-1 px-2' placeholder='Password'/>
        </div>
        <div className=" flex space-x-2 py-2 border-t justify-end px-4">
            <button onClick={() => setShow(false)} className='bg-zinc-300 p-1 px-4 rounded hover:bg-zinc-200'>Cancel</button>
            <button className='bg-blue-300 p-1 px-4 rounded hover:bg-blue-200'>Sign In</button>
        </div>
    </div>
    </div>,
    document.getElementById('portal')
    )

  )
}

export default Modal
