import React from 'react'
import react_logo from '../../assets/logos/react_logo.png'
import firebase_logo from '../../assets/logos/firebase_logopng.png'
import jac_logo from '../../assets/logos/jaclogo.png'
import '../footer/Footer.css'
import CountdownTimer from '../countdown/CountdownTimer'

function Footer() {
    return (
        <div className='footer-container'>
            <CountdownTimer />
            <h3 className='mobile-support-text'>
                If you have any troubles or just want to talk,
                give us a call at 336-909-8493.
                <br />
            </h3>
            <div className='logo-container'>
                <img src={firebase_logo} className='footer-logos' />
                <img src={jac_logo} className='footer-logos'/>
                <img src={react_logo} className='footer-logos' />
            </div>
        </div>
    )
}

export default Footer