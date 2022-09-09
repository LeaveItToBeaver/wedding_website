import React from 'react'
import '../Registry/Registry.css'
import targetLogo from "../../assets/logos/Target-Logo.png"

function Registry() {

  const handleClick = () => {
    window.open("https://www.target.com/gift-registry/gift-giver?registryId=415d2650-0ba0-11ed-9dd6-e5b74c57ac90&type=WEDDING");
  };

  return (
    <div className='container'>
      <h1>Registry</h1>
      <p className='para-text'>Celebrating our special day with loved ones is all we could as for. <br />
        However, if you would like to honor us with a gift, we are registered at Target. <br />
      </p>
      <div className='center'>
        <img src={targetLogo} 
          width="auto"
          height="250px" 
          className='target-logo'/>
        <button className='registry-button1' onClick={handleClick}>
        Click Here To Go To Target
        </button>

      </div>
      <p>
          Or, if you would like to help pay for our honeymoon, you can do so below.<br/> 
          Thank you.
        </p> 
    </div>
  )
}

export default Registry