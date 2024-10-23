import React, { useState } from 'react'
import Header from '../components/Header'

function Background_Changer() {
  const [color ,setColor] = useState('white');
  return (
    <>
        <Header/>
        <div className='w-full md:w-[80%] md:ml-[20%] mt-16 min-h-[710px] shadow' style={{backgroundColor : color}}>
          <div className="space-x-4 fixed bottom-32 right-[20%]">
            <button  onClick={() => setColor("orange")} className='py-2 px-8 text-white rounded border bg-orange-500'>Orange</button>
            <button  onClick={() => setColor("green")} className='py-2 px-8 text-white text-whiterounded border bg-green-500'>Green</button>
            <button  onClick={() => setColor("purple")} className='py-2 px-8 text-white rounded border bg-purple-500'>Purple</button>
            <button  onClick={() => setColor("yellow")} className='py-2 px-8 text-white rounded border bg-yellow-500'>Yellow</button>
            <button  onClick={() => setColor("brown")} className='py-2 px-8  text-white rounded border bg-slate-600'>Gray</button>
          </div>
        </div>
    </>
  )
}

export default Background_Changer