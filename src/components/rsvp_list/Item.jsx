import React from 'react'
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
            <input type="radio"
                name={props.name}
                value={1}
                id='attendingChoice1'
                className='attending-input' />
            <label htmlFor="attendingChoice1"
                className='label-radio'>Yes</label>
            <input type="radio"
                name={props.name}
                value={0}
                id='attendingChoice2'
                className='attending-input' />
            <label htmlFor="attendingChoice2"
                className='label-radio'>No</label>
        </div>
    )
}

export default NewItem