import React from 'react'
import { Link } from 'react-router-dom'
import './rsvp.css'

export default function RSVP_Btn() {
  return (
    <div className='submit-button-container'>
      <Link to="/RSVP">
        <button className='submit-button'>
            RSVP HERE BEFORE MARCH 2023
        </button>
      </Link>
    </div>
  )
}
