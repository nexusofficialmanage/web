'use client'
import React, { useEffect, useState } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/Ai';
import { Tooltip } from "@nextui-org/react";

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
    addressLine: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    phoneNumbers: [''], // Initialize with an empty phone number
    emailIds: [''],
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

  const addEmailIdInput = () => {
    setFormData((prevData) => ({
      ...prevData,
      emailIds: [...prevData.emailIds, ''], // Add an empty phone number
    }));
  };

  const removeEmailIdInput = (index) => {
    setFormData((prevData) => {
      const newEmailIds = [...prevData.emailIds];
      newEmailIds.splice(index, 1);
      return {
        ...prevData,
        emailIds: newEmailIds,
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
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="shopName">Shop Name:</label></td>
                <td>
                  <input
                    type="text"
                    id="shopName"
                    placeholder="Enter your Shop's name"
                    className='inpt'
                    value={formData.shopName}
                    onChange={(e) => handleInputChange(e, 'shopName')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="storeid">ShopId:</label></td>
                <td>
                  <Tooltip content='The name should be unique and without spaces and will be used to identify your store' className='tooltip'>
                    <input 
                      type="text"
                      id="storeid"
                      placeholder='Enter a unique shopname'
                      className='inpt'
                      value={formData.storeid}
                      onChange={(e) => handleInputChange(e, 'storeid')}
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="shopTagline">Shop TagLine:</label></td>
                <td>
                  <Tooltip content='The tagline should be short and should be like a motto for your store' className='tooltip'>
                    <input
                      type="text"
                      id="shopTagline"
                      placeholder="Enter a ShopTagline"
                      className='inpt'
                      value={formData.shopTagline}
                      onChange={(e) => handleInputChange(e, 'shopTagline')}
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="description">Description:</label></td>
                <td>
                  <Tooltip content='Write a description about your shop. You can make include as much details as you want. A description with keywords related to your store will improve search results for your store' className='tooltip'>
                    <textarea
                      id="description"
                      placeholder='Enter the description'
                      className='inpt textbox'
                      value={formData.description}
                      onChange={(e) => handleInputChange(e, 'description')}
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="addressLine">Address Line:</label></td>
                <td>
                  <Tooltip content='Enter your address line so that people can identify your shop' className='tooltip'>
                    <input
                      type="text"
                      id="addressLine"
                      placeholder="Enter Address Line"
                      className='inpt'
                      value={formData.addressLine}
                      onChange={(e) => handleInputChange(e, 'addressLine')}
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="pincode">PinCode:</label></td>
                <td>
                  <input
                    type="text"
                    id="pincode"
                    placeholder="Enter Pincode"
                    className='inpt'
                    value={formData.pincode}
                    onChange={(e) => handleInputChange(e, 'pincode')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="city">City:</label></td>
                <td>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter City"
                    className='inpt'
                    value={formData.city}
                    onChange={(e) => handleInputChange(e, 'city')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="state">State:</label></td>
                <td>
                  <input
                    type="text"
                    id="state"
                    placeholder="Enter State"
                    className='inpt'
                    value={formData.state}
                    onChange={(e) => handleInputChange(e, 'state')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="country">Country:</label></td>
                <td>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter Country"
                    className='inpt'
                    value={formData.country}
                    onChange={(e) => handleInputChange(e, 'country')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="phoneNumbers">Phone Number:</label></td>
                <td>
                  <div className=''>
                    {formData.phoneNumbers.map((phoneNumber, index) => (
                      <div className='addoninput' key={index}>
                        <input
                          className='inpt'
                          type="text"
                          id={`phoneNumbers_${index}`}
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
                </td>
              </tr>
              <tr>
                <td><label htmlFor="emailIds">Email Id:</label></td>
                <td>
                  <div className=''>
                    {formData.emailIds.map((emailId, index) => (
                      <div className='addoninput' key={index}>
                        <input
                          className='inpt'
                          type="text"
                          id={`emailIds_${index}`}
                          value={emailId}
                          placeholder={`Email Id ${index + 1}`}
                          onChange={(e) => {
                            const newEmailIds = [...formData.emailIds];
                            newEmailIds[index] = e.target.value;
                            setFormData((prevData) => ({
                              ...prevData,
                              emailIds: newEmailIds,
                            }));
                          }}
                        />
                        {index > 0 && (
                          <AiOutlineMinusCircle
                            onClick={() => removeEmailIdInput(index)}
                            className='btncreate'
                          />
                        )}
                      </div>
                    ))}
                    <AiFillPlusCircle onClick={addEmailIdInput} className='btncreate' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
