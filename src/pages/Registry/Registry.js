import React from 'react'
import '../Registry/Registry.css'
import targetLogo from "../../assets/logos/Target-Logo.png"
import beyondLogo from "../../assets/logos/Beyond_Logo.png"

function Registry() {

  const handleTargetClick = () => {
    window.open("https://www.target.com/gift-registry/gift-giver?registryId=415d2650-0ba0-11ed-9dd6-e5b74c57ac90&type=WEDDING");
  };

  const handleBeyondClick = () => {
    window.open("https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551799783?eventType=Wedding");
  }

  return (
    <div className='container-reg'>
      <h1 className='header-reg'>Registry</h1>
      <p className='para-text'>Celebrating our special day with loved ones is all we could as for. <br />
        However, if you would like to honor us with a gift, we are registered at Target as well as <br />
        Bed Bath And Beyond. <br />
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
        <img src={beyondLogo} 
          width="350px"
          height="auto" 
          className='target-logo'
          onClick={handleBeyondClick}/>
        <button className='registry-button1' onClick={handleBeyondClick}>
        Bed Bath And Beyond Registry
        </button>
      </div>
    </div>
  )
}

export default Registry