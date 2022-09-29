import React from 'react'
import { useState } from 'react'
import NewItem from './NewItem';

function CreateItem() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setTask(newValue);
    }

    function addName() {
        setItems(prevValue => {
            return [...prevValue, task];
        });
        setTask("");
    }

    function deleteName(id) {
        setItems(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div className='item-container'>
            <div className='item-heading'>
                <h1 className='item-heading-text'>
                    Add the names of those attending!
                </h1>
            </div>
            <div className='item-form'>
                <input
                    name='nameInput'
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button onClick={addName}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <NewItem
                            key={index}
                            id={index}
                            text={item}
                            onChecked={deleteName} />
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default CreateItem