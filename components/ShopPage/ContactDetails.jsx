import React from 'react';
import './ContactDetails.css'

function ContactDetails({ view, onClose}) {
  const divStyle = {
    display: view ? 'block' : 'none',
  };

  return (
    <div className='popup-container' style={divStyle}>
      <div className='popup-content'>
        oinerofnro ifnreoifneroifnroifinroeiinf eroiifnroiniI FMMMMMMMMMMMMMMMMM MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM MMMMMMMMMMMMMMMMMMMMMM MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
      </div>
      <button className='close-button' onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default ContactDetails;
