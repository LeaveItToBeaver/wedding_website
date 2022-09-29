import React from 'react'
import trash from '../../assets/interactionPNGs/trash.png'
import '../rsvp_list/ListItems.css'

function NewItem(props) {
    return (
        <div>
            <li>{props.text}</li>
            <span onClick={() => {
                props.onChecked(props.id);
            }}>
                <img src={trash}
                    className='trash-png' />
            </span>
        </div>
    )
}

export default NewItem