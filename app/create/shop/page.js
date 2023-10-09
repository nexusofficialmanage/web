'use client';
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

  // Function to handle changing the current image index

  useEffect(() => {
    // Set up a timer to automatically advance the slideshow
    if (images.length > 0) {
      const interval = setInterval(() => {
        console.log(currentIndex);
        console.log(images.length);
        console.log(images);
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Change the duration (in milliseconds) as needed
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [images, currentIndex]);


  // State to store form input values
  const [formData, setFormData] = useState({
    shopName: '',
    storeid: '',
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

  return (
    <div>
      <div className='bannercreateshop'>

      </div>
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

          <div className='shop-icon-container'>
            <div className='shop-icon'>
              <img src={imagecirlceicon} alt="Shop Icon" />
            </div>
          </div>

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
          <div className=''>
            {phoneNumbers.map((phoneNumber, index) => (
              <div className='addoninput' key={index}>
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
      </div>
    </div>
  );
}

export default Page;
