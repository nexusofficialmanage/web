'use client'
import React, { useEffect, useState } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/Ai';

function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userid');
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagecirlceicon, setimagecircleicon] = useState("/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg")

  useEffect(() => {
    // Set up a timer to automatically advance the slideshow
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); 
      return () => clearInterval(interval);
    }
  }, [images, currentIndex]);

  // State to store form input values
  const [formData, setFormData] = useState({
    shopName: '',
    storeid: '',
    shopTagline: '',
    description: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    phoneNumbers: [''], // Initialize with an empty phone number
  });

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({          
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const newImages = [...images, URL.createObjectURL(e.target.files[0])];
    setImages(newImages);
  };

  const addPhoneNumberInput = () => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumbers: [...prevData.phoneNumbers, ''], // Add an empty phone number
    }));
  };

  const removePhoneNumberInput = (index) => {
    setFormData((prevData) => {
      const newPhoneNumbers = [...prevData.phoneNumbers];
      newPhoneNumbers.splice(index, 1);
      return {
        ...prevData,
        phoneNumbers: newPhoneNumbers,
      };
    });
  };

  return (
    <div>
      <div className='bannercreateshop'></div>
      <div className='shopinformation'>
        <div className='imagealternator'>
        {images.length === 0 ? (
            <img src="/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg" alt="Default" className="default-image" />
            ) : (
              <img
              key={Number(currentIndex)}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              // onClick={() => changeImage(index)}
              />
           )}
          <input
            type="file"
            onChange={handleImageUpload}
            className='image-upload-input'
          />
        </div>
        <div className='shopinformationinput'>
        <input
            placeholder="Enter the Shop's name"
            className='inpt'
            value={formData.shopName}
            onChange={(e) => handleInputChange(e, 'shopName')}
          />
          <input 
            placeholder='Enter a shopname without spaces, this should be unique and will be used to identify your shop'
            className='inpt'
            value={formData.storeid}
            onChange={(e) => handleInputChange(e, storeid)}
          />
          <input
            placeholder="Enter a ShopTagline"
            className='inpt'
            value={formData.shopTagline}
            onChange={(e) => handleInputChange(e, 'shopTagline')}
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
          <div className=''>
            {formData.phoneNumbers.map((phoneNumber, index) => (
              <div className='addoninput' key={index}>
                <input
                  className='inpt'
                  type="text"
                  value={phoneNumber}
                  placeholder={`Phone Number ${index + 1}`}
                  onChange={(e) => {
                    const newPhoneNumbers = [...formData.phoneNumbers];
                    newPhoneNumbers[index] = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      phoneNumbers: newPhoneNumbers,
                    }));
                  }}
                />
                {index > 0 && (
                  <AiOutlineMinusCircle
                    onClick={() => removePhoneNumberInput(index)}
                    className='btncreate'
                  />
                )}
              </div>
            ))}
            <AiFillPlusCircle onClick={addPhoneNumberInput} className='btncreate' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
