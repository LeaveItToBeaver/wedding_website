import React, { useState } from 'react'
import Login from '../../components/login/Login'

export default function FAQ() {
  const [showLogin, setShowLogin] = useState(false);
  const onClick = () => setShowLogin(true);

  return (
    <div>
      <div className='login-holder'>
        <span onClick={onClick}> Sign In Btn Test</span>
        {showLogin ? <Login /> : null }
      </div>
    </div>
  )
}
