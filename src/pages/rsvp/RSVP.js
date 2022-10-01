import React from 'react';
import CreateItem from '../../components/rsvp_list/CreateItem';

function RSVP() {
  return (
    <div className='rsvp-contianer'>
      <h1>We Are Excited To Have You!</h1>
      <h2>
        If you have any questions about a plus one <br/>
        feel free to email either one of us <br/>
        jasonbeaverw99@gmail.com<br/>
        or give us a call at <br/>
        336-909-8493.
      </h2>
      <CreateItem/>
    </div>
  )
}

export default RSVP