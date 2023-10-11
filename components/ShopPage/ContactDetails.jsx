import React from 'react';
import './ContactDetails.css'

function ContactDetails({ view, onClose}) {
  const divStyle = {
    display: view ? 'block' : 'none',
  };

  const phoneNumbers = ['8921655405', '34342232323']
  const emailIds = ['jeevanalexenkavalam@gmail.com', 'auracodehandle@gmail.com']
  const town = "Changanacherry";
  const state = "Kerala";
  const country = "India";

  return (
    <div className='popup-container' style={divStyle}>
      <div className='title'>
        Contact Details
      </div>
      <div className='address'> Kavalam (H), Cheeranchira P.O</div>
      <div> {town}, {state}, {country} </div>
      <div className='phonenumbers'>
        {phoneNumbers.map((phoneNumber, index) => {
            return <div className='phonenumber'> phoneNumber {index + 1}: {phoneNumber} </div>
        })}
      </div>
      <div className='emailids'>
        {emailIds.map((emailId, index) => {
            return <div className='emailid'> Email Id {index + 1}: {emailId} </div>
        })}
      </div>
      <button className='close-button' onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default ContactDetails;
