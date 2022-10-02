import React, {useState, useEffect} from 'react';
import CountdownTimer from '../../components/countdown/CountdownTimer';
import RSVP_Btn from '../../components/rsvp_button/RSVP_Button';
import AboutUs from './AboutUs';
import "./Landing.css";

export default function Landing() {
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

  const isMobile = windowDimension <= 960;

  return (
    <div className={isMobile ? 'mobile-container' : 'container'}>
        {isMobile ? <CountdownTimer/> : null}
        <div className={isMobile ? 'mobile-about-us' : 'about-us'}>
          <AboutUs />
        </div>
        <div className='rsvp-button'>
          <RSVP_Btn/>
        </div>
    </div>
  );
};
