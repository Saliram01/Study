import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const elRef = useRef();
    const data = [
        {
            desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, libero?',
            fileSize : '.9mb',
            close : false,
            tag : {
                isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-purple-600'
            },
        },
        {
            desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, libero?',
            fileSize : '.2mb',
            close : false,
            tag : {
                isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-yellow-600'
            },
        },
        {
            desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, libero?',
            fileSize : '.5mb',
            close : false,
            tag : {
                isOpen: true, tagTitle: 'Upload', tagColor: 'bg-green-600'
            },
        },
    ]

  return (
    <div ref={elRef} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {
            data.map((el,id) => <Card drag key={id} data={el} reference={elRef}/>)
        }
    </div>
  )
}

export default Foreground
