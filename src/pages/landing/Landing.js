import React from 'react';
import RSVP_Btn from '../../components/rsvp_button/RSVP_Button';
import "./Landing.css";


export default function Landing() {
  return (
    <div className='container'>
        <div className='rsvp-button'>
          <RSVP_Btn/>
        </div>
        <h3>
          If you have any troubles or just want to talk, <br/>
           give us a call at 336-909-8493.
        </h3>
    </div>
  );
};
