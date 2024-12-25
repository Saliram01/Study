import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react';

function ContextSafe() {
    const boxRef = useRef();

    const {contextSafe} = useGSAP();

    const rotateBox = contextSafe(() => {
        gsap.to(boxRef.current,{
            rotate: 360,
            duration: 2
        })
    })
    

  return (
    <div>
        <button onClick={rotateBox}>Animation</button>
        <div ref={boxRef} className="box"></div>
    </div>
  )
}

export default ContextSafe
