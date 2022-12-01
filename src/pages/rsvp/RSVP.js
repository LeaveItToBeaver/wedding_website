import React from 'react';
import { useState, useEffect } from 'react'
import { db, auth } from '../../Firebase'
import { collection, addDoc, getDocs } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import '../rsvp/RSVP.css'
import '../rsvp/RSVPMobile.css'
import PlusIcon from '../../assets/interactionPNGs/plus-icon.png'
import NewItem from '../../components/rsvp_list/Item'
import ListOfAttendants from '../../components/rsvp_list/ListOfAttendants';


function RSVP() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const [attending, setAttending] = useState([]);
  const [notAttending, setNotAttending] = useState([]);
  const [windowDimension, setWindowDimension] = useState(null);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    //if (user) navigate("/RSVP");
  }, [user, loading]);

  const addAttendee = async (e) => {
    e.preventDefault();
    try {
      const attendingDocRef = await addDoc(collection(db, "Attending"), {
        attending: filterData(attending)
      });
      const notAttendingDocRef = await addDoc(collection(db, "Not_Attending"), {
        attending: filterData(notAttending)
      });

      console.log("Added attending: " + attendingDocRef.id)
      console.log("Added not attending: " + notAttendingDocRef.id)
    } catch (exception) {
      console.log("Trouble writing name: ", exception);
    } finally {
      setNameList(data => {
        return [];
      });
    }
  }

  function filterData(array) {
    return array.filter((item, index) =>
      array.indexOf(item) === index);
  }

  //This is here to grab the name from Firebase through the document ID.
  const fetchNames = async () => {
    await getDocs(collection(db, "Attending"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) =>
        ({
          ...doc.data(),
          id: doc.id
        }));
        setName(newData.);
        console.log(name);
      })
  }

  useEffect(() => {
    fetchNames();
  }, [])

  // This is here to resize the window to fit mobile devices dynamically.
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDisabled = nameList.length === 0;
  const isMobile = windowDimension <= 960;

  function handleChange(event) {
    const newValue = event.target.value;
    setName(newValue);
  }

  /*
  This function is here to serperate the data
  into the proper arrays.
  */
  function handleSelectionChange(id, value) {
    let attendee = nameList[id];
    if (value === "Yes") {
      setAttending(prevValue => {
        return [...prevValue, attendee];
      });
    } else if (value === "No") {
      setNotAttending(prevValue => {
        return [...prevValue, attendee]
      });
    }
    console.log("Attending: " + attending);
    console.log("Not Attending: " + notAttending);
  }

  function addName() {
    setNameList(prevValue => {
      return [...prevValue, name];
    });
    console.log(nameList)
    setName("");
  }

  function deleteName(id) {
    setNameList(prevValue => {
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
            value={name}
            className={isMobile ? 'mobile-name-input' : 'name-input'}>
          </input>
          <button onClick={addName}
            className={isMobile ? 'mobile-name-button' : 'add-name-btn'}>
            <span><img
              src={PlusIcon}
              className={isMobile ? 'mobile-name-icon' : 'add-name-icon'} />
            </span>
          </button>
        </div>
        <div>
          <ul className={
            isDisabled ? 'isDisabled'
              : isMobile && !isDisabled
                ? 'mobile-list-container'
                : 'list-container'  // Sorry for this :/
          }>
            {nameList.map((item, index) => (
              <NewItem
                key={index}
                id={index}
                text={item}
                name={index}
                onSelectionChange={handleSelectionChange}
                onChecked={deleteName}
              />))
            }
          </ul>
          <button
            className="submit-name-button"
            onClick={addAttendee}
            disabled={isDisabled ? "disabled" : ""}>
            Submit
          </button>
          {user ?           
          <button
            className="submit-name-button"
            onClick={fetchNames}>
            Show Data
          </button> : null}
        </div>
      </div>
    </div>
  )
}

export default RSVP