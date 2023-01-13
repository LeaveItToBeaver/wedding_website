import React, { useState } from 'react'
import '../faq/faq.css'
import Login from '../../components/login/Login'
import Map from '../../components/map/Map'

export default function FAQ() {
  const [showLogin, setShowLogin] = useState(false);
  const onClick = () => {
    showLogin === true 
    ? setShowLogin(false) 
    : setShowLogin(true);
  }

  return (
    <div className='faq-container'>
      <div>
        <h1>
          We are so excited to see you there!
        </h1>
        <br/>
        <h1>What should we wear?</h1>
        <h2>Anything smart casual or semi-formal</h2>
        <br/><br/>
        <h1>What are we going to eat?</h1>
        <h2>Buffet Consisting Of:</h2>
        <ul className='FAQ-list'>
          <li className='FAQ-list'>Honey ginger pork roast</li>
          <li className='FAQ-list'>Herb Based chicken</li>
          <li className='FAQ-list'>Brussel sprouts</li>
          <li className='FAQ-list'>Mashed potatoes</li>
          <li className='FAQ-list'>Rolls</li>
          <li className='FAQ-list'>Simple salad</li>
        </ul>
        <br/><br/>
        <h2>Where do we need to go?</h2>
        <h3>The address is 324 Sidden St, Mt Airy, NC 27030</h3>
        <Map/>

      </div>
      
      <div className='login-holder'>
        <span onClick={onClick} className="sign-in-btn">Show Login</span>
        {showLogin ? <Login /> : null }
      </div>
    </div>
  )
}
