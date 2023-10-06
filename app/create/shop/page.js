'use client';
import React, { useState } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/Ai';

function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userid');

  // State to store form input values
  const [formData, setFormData] = useState({
    shopName: '',
    description: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
  });

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

  // State to store uploaded images
  const [images, setImages] = useState([]);
  const defaultImage = '/default-image.jpg'; // Replace with your default image path

  // Function to handle changes in form input fields
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to handle image uploads
  const handleImageUpload = (e) => {
    const newImages = [...images, URL.createObjectURL(e.target.files[0])];
    setImages(newImages);
  };

  return (
    <div>
      <div className='bannercreateshop'></div>
      <div className='shopinformation'>
        <div className='shopinformationinput'>
          <input
            placeholder="Enter the Shop's name"
            className='inpt'
            value={formData.shopName}
            onChange={(e) => handleInputChange(e, 'shopName')}
          />
          <textarea
            placeholder='Enter the description'
            className='inpt textbox'
            value={formData.description}
            onChange={(e) => handleInputChange(e, 'description')}
          />
          <input
            placeholder="Enter Address Line 1"
            className='inpt'
            value={formData.addressLine1}
            onChange={(e) => handleInputChange(e, 'addressLine1')}
          />
          <input
            placeholder="Enter Address Line 2"
            className='inpt'
            value={formData.addressLine2}
            onChange={(e) => handleInputChange(e, 'addressLine2')}
          />
          <input
            placeholder="Enter Pincode"
            className='inpt'
            value={formData.pincode}
            onChange={(e) => handleInputChange(e, 'pincode')}
          />
          <input
            placeholder="Enter City"
            className='inpt'
            value={formData.city}
            onChange={(e) => handleInputChange(e, 'city')}
          />
          <input
            placeholder="Enter State"
            className='inpt'
            value={formData.state}
            onChange={(e) => handleInputChange(e, 'state')}
          />
          <input
            placeholder="Enter Country"
            className='inpt'
            value={formData.country}
            onChange={(e) => handleInputChange(e, 'country')}
          />

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
                  <AiOutlineMinusCircle
                    onClick={() => removePhoneNumberInput(index)}
                    className='btn'
                  />
                )}
              </div>
            ))}
            <AiFillPlusCircle onClick={addPhoneNumberInput} className='btn' />
          </div>
        </div>
        <div className='imagealternator'>
          {images.length === 0 ? (
            <img src="" alt="Default" className="default-image" />
          ) : (
            images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className='image-upload-input'
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
