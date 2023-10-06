'use client';
import React, { useState } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle , AiOutlineMinusCircle} from 'react-icons/Ai';

function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userid');

  // State to store phone numbers
  const [phoneNumbers, setPhoneNumbers] = useState(['']);

  // Function to add a new phone number input field
  const addPhoneNumberInput = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  // Function to remove a phone number input field
  const removePhoneNumberInput = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  return (
    <div>
      <div className='bannercreateshop'></div>
      <div className='shopinformation'>
        <div className='shopinformationinput'>
          <input placeholder="Enter the Shop's name" className='inpt' />
          <input placeholder="Enter Address Line 1" className='inpt' />
          <input placeholder="Enter Address Line 2" className='inpt' />
          <input placeholder="Enter Pincode" className='inpt' />
          <input placeholder="Enter City" className='inpt' />
          <input placeholder="Enter State" className='inpt' />
          <input placeholder="Enter Country" className='inpt' />

          {/* Phone Numbers */}
          <div className='addoninput'>
            {phoneNumbers.map((phoneNumber, index) => (
              <div key={index}>
                <input
                  className='inpt'
                  type="text"
                  value={phoneNumber}
                  placeholder={`Phone Number ${index + 1}`}
                  onChange={(e) => {
                    const newPhoneNumbers = [...phoneNumbers];
                    newPhoneNumbers[index] = e.target.value;
                    setPhoneNumbers(newPhoneNumbers);
                  }}
                />
                {index > 0 && (
                  <AiOutlineMinusCircle onClick={() => removePhoneNumberInput(index)}  className='btn'/>
                )}
              </div>
            ))}
            <AiFillPlusCircle onClick={addPhoneNumberInput} className='btn'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
