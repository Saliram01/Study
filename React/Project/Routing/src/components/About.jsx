import React, { useState } from 'react'

function About() {
  const [value , setValue] = useState(0);

  return (
    <div className='about' style={{display : 'flex', flexDirection : 'column'}}>
        <p style={{color : 'white', fontSize : '20px',marginBottom : '30px'}}>{value}</p>
        <strong style={{marginBottom : '30px', color : 'white'}}>Number is {value % 2 === 0 ? 'Even' : 'Odd'}</strong>
        <div style={{display : 'flex' , gap : '10px'}}>
            <button onClick={() => setValue(value - 1)}
              style={{padding : '5px 12px'}}>Decrease</button>
            <button onClick={() => setValue(value + 1)}
              style={{padding : '5px 12px'}}>Increase</button>
        </div>
    </div>
  )
}

export default About