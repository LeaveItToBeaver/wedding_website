import React, { useState } from 'react'
import '../faq/faq.css'
import Login from '../../components/login/Login'

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
      </div>
      
      <div className='login-holder'>
        <span onClick={onClick} className="sign-in-btn">Show Login</span>
        {showLogin ? <Login /> : null }
      </div>
    </div>
  )
}
