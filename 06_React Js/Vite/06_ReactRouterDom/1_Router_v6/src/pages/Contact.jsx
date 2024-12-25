import React from 'react'
import {useNavigate} from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="btn-container">
          <button className="contactInfo" onClick={() => navigate('info')}>ContactInfo</button>  
          <button className="contactForm" onClick={() => navigate('form')}>ContactForm</button> 
      </div> 
    </div>
  )
}

export default Contact