import React, { useState } from 'react'
import '../faq/faq.css'
import Login from '../../components/login/Login'
import Map from '../../components/map/Map'

export default function FAQ() {
  const [showLogin, setShowLogin] = useState(false);
  const onClick = () => {
    showLogin == true 
    ? setShowLogin(false) 
    : setShowLogin(true);
  }

  return (
    <div className='faq-container'>
      <div>
        <h1>
          We are so excited to see you there!
        </h1>
        <br/><br/>
        <h2>Where do we need to go?</h2>
        <h3>The address is 324 Sidden St, Mt Airy, NC 27030</h3>
        <br/>
        <h2>What should we wear?</h2>
        <h3>Anything smart casual or semi-formal, </h3>
        <Map/>

      </div>
      
      <div className='login-holder'>
        <span onClick={onClick} className="sign-in-btn">Show Login</span>
        {showLogin ? <Login /> : null }
      </div>
    </div>
  )
}
