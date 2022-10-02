import React, {useState, useRef} from 'react'
import trash from '../../assets/interactionPNGs/trash.png'
import '../rsvp_list/ListItems.css'

function NewItem(props) {


    return (
        <div className='new-item'>
            <li className='name-text'>{props.text}</li>
            <span onClick={() => {
                props.onChecked(props.id);
            }}>
                <img src={trash}
                    className='trash-png' 
                    title='Delete Name'/>
            </span>
            <span>
                <input type="radio" 
                    name='attending'
                    value="Yes"
                    id='attendingChoice1'
                    className='attending-input'/>
                    <label htmlFor="attendingChoice1">Yes</label>
                <input type="radio" 
                    name='attending'
                    value="No"
                    id='attendingChoice2'
                    className='attending-input'/>
                    <label htmlFor="attendingChoice1">No</label>
            </span>
        </div>
    )
}

export default NewItem