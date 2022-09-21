import React, {useState, useEffect} from 'react'
import '../landing/AboutUs.css';
import engagement_photo from "../../assets/engagement_photos/IMG_4334.jpg"

function AboutUs() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
      setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
      function handleResize() {
          setWindowDimension(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 680;

  return (
    <div className={isMobile ? 'mobile-about-us-container' : 'about-us-container'}>
      <img src={engagement_photo}
        width="auto"
        height="auto"
        className={isMobile ? 'about-us-mobile-children' : 'about-us-children'}
      />
      <div className={isMobile ? 'about-us-mobile-children' : 'about-us-children'}>
        <h1 className='about-us-heading'>About Us!</h1>
        <p className='about-us-para'>
          We met while working together at the Davie County Public Library.
          While it may not have been love at first sight for either one of us,
          we couldn’t deny the way we instantly hit it off.
          Dating became an obvious next step as our friendship began to grow into something more.
          After making it official on April 1st of 2021,
          we quickly realized we’d found something special and far
          more serious than either of us were expecting.
          It only took us one year to decide on forever,
          so Jason proposed in May of 2022 and we’ve been blissfully planning our story ever since.
        </p>
      </div>
    </div>
  )
}

export default AboutUs