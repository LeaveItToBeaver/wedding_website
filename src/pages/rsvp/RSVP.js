import React, { useState } from 'react';

function RSVP() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setTask(newValue);
  }

  function addName(){
    setItems(prevValues => {
      return[...prevValues, task];
    });
    setTask("");
  }

  function deleteItem(id){
    setItems(prevValues =>{
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>

    </div>
  )
}

export default test