import React from 'react'

function ContactFrom() {
  return (
    <div>
        <input type="text" placeholder='Enter your email...'/>
        <br />
        <input type="email" placeholder='Enter your email'/>
        <br />
        <textarea placeholder='Enter message'></textarea>
        <br />
        <button type='submit'>Submit</button>
    </div>
  )
}

export default ContactFrom