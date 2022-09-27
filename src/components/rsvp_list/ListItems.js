import React from 'react'
import FlipMove from 'react-flip-move'

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
                        
                </p>
            </div>
        )
    })
}

export default ListItems