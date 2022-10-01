import React from 'react';
import { useState, useEffect } from 'react'
import '../rsvp/RSVP.css'
import PlusIcon from '../../assets/interactionPNGs/plus-icon.png'
import NewItem from '../../components/rsvp_list/NewItem'


function RSVP() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(()=>{
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize(){
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 960;

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
    <div className='rsvp-contianer'>
      <h1 className='rsvp-heading-one'>We Are Excited To Have You!</h1>
      <h2 className='rsvp-heading-two'>
        If you have any questions about a plus one <br />
        feel free to email either one of us <br />
        jasonbeaverw99@gmail.com<br />
        or give us a call at <br />
        336-909-8493.
      </h2>
      <div className='item-container'>
        <div className='item-heading'>
          <h1 className='item-heading-text'>
            Add the names of those attending!
          </h1>
        </div>
        <div className='item-form'>
          <input
            name='nameInput'
            placeholder='First and last name'
            type="text"
            onChange={handleChange}
            value={task}
            className='name-input'
          />
          <button onClick={addName}
            className='add-name-btn'>
            <span><img
              src={PlusIcon}
              className='add-name-icon' /></span>
          </button>
        </div>
        <div>
          <ul className='list-container'>
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
    </div>
  )
}

export default RSVP