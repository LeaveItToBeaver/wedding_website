import React, {useState, useEffect} from 'react';
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

  const isMobile = windowDimension <= 680;

  return (
    <div className={isMobile ? 'mobile-container' : 'container'}>
        <div className='rsvp-button'>
          <RSVP_Btn/>
        </div>
        <h3 className={isMobile ? 'mobile-support-text' : 'support-text'}>
          If you have any troubles or just want to talk, <br/>
           give us a call at 336-909-8493.
        </h3>
        <div className={isMobile ? 'mobile-about-us' : 'about-us'}>
          <AboutUs />
        </div>
    </div>
  );
};
