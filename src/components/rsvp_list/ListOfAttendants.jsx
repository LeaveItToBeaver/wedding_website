import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../Firebase'
import { collection, getDocs } from "firebase/firestore"

async function ListOfAttendants() {
    const [attending, setAttending] = useState([]);
    const [notAttending, setNotAttending] = useState([]);
    const attendingSnapshot = await getDocs(collection(db, "Attending"));
    const notAttendingSnapshot = await getDocs(collection(db, "Not_Attending"));

    attendingSnapshot.forEach((doc) => {
        setAttending(data =>{
            return [...data, doc]
        });
    });
    notAttendingSnapshot.forEach((doc) => {
        setNotAttending(data => {
            return [...data, doc]
        });
    });

    console.log(attending);
    console.log(notAttending);

  return (
    <div className='list-of-attendants'>

    </div>
  )
}

export default ListOfAttendants