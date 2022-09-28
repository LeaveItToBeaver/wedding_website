import React from 'react'
import FlipMove from 'react-flip-move'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const names = props.names
    const listNames = names.map(item => {
        return (
            <div className='list' key={item.key}>
                <p>
                    <input type="text"
                        id={item.key}
                        value={item.key}
                        onChange={(e) => {
                            props.setUpdate(e.target.value, item.key)
                        }} />
                    <span>
                        <FontAwesomeIcon className='font-icons-rsvp' onClick={() => {
                            props.deleteItem(item.key)
                        }} icon="trash" />
                    </span>
                </p>
            </div>
        )
    })

    return (
        <div>
            <FlipMove duration={350} easing="ease-in-out">
                {listNames}
            </FlipMove>
        </div>
    )
}

export default ListItems