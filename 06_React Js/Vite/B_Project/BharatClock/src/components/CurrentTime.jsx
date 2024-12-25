import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interValId = setInterval(() => {
            setTime(new Date());
        },1000)

        return () => {clearInterval(interValId)}
    },[])
    return <p className='fs-3'>This is the current time : {time.toLocaleTimeString()}</p>
}

export default CurrentTime;