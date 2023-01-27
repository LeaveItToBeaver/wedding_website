import React from 'react'
import '../Registry/Registry.css'
import targetLogo from "../../assets/logos/Target-Logo.png"
import walmartLogo from "../../assets/logos/Walmart-Logo.webp"

function Registry() {

  const handleTargetClick = () => {
    window.open("https://www.target.com/gift-registry/gift-giver?registryId=415d2650-0ba0-11ed-9dd6-e5b74c57ac90&type=WEDDING");
  };

  const handleWalmartClick = () => {
    window.open("https://www.walmart.com/registry/wr/9d42e3e9-b1f6-41b6-8497-323ed3d2d104");
  }

  return (
    <div className='container-reg'>
      <h1 className='header-reg'>Registry</h1>
      <p className='para-text'>Celebrating our special day with loved ones is all we could ask for. <br />
        However, if you would like to honor us with a gift, we are registered at Target as well as <br />
        Walmart. <br />
      </p>
      <div className='center-reg'>
        <img src={targetLogo} 
          width="auto"
          height="250px" 
          className='target-logo'
          onClick={handleTargetClick}/>
        <button className='registry-button1' onClick={handleTargetClick}>
        Target Registry
        </button>
        <img src={walmartLogo} 
          width="350px"
          height="auto" 
          className='target-logo'
          onClick={handleWalmartClick}/>
        <button className='registry-button1' onClick={handleWalmartClick}>
        Walmart Registry
        </button>
      </div>
    </div>
  )
}

export default Registry