'use client'
import React, { useState, useEffect } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/Ai';
import { Tooltip } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client';

function Page() {
  const searchParams = useSearchParams();
  const { user, error, isLoading } = useUser();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagecirlceicon, setimagecircleicon] = useState("/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg");
  const [selectedCategory, setSelectedCategory] = useState('');

  
  // State for tags
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [images, currentIndex]);

  const [formData, setFormData] = useState({
    userid: user,
    shopName: '',
    storeid: '',
    shopTagline: '',
    description: '',
    addressLine: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    phoneNumbers: [''],
    emailIds: [''],
    facebookLink: '',
    twitterLink: '',
    instagramLink: '',
    openDays: {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    },
    openingTime: '',
    closingTime: '',
    refundPolicy: '',
    returnPolicy: '',
    tags: [],
    images: [],
    category: '',
  });

  const submitForm = () => {
    fetch('/api/create/shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Shop created successfully');
        } else {
          alert('Failed to create a new shop');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSocialMediaLinkChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const toggleOpenDay = (day) => {
    setFormData((prevData) => ({
      ...prevData,
      openDays: {
        ...prevData.openDays,
        [day]: !prevData.openDays[day],
      },
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const base64Image = event.target.result;

      setImages([...images, base64Image]);
      setFormData((prevData) => ({
        ...prevData,
        images: [...prevData.images, base64Image],
      }));
    };

    reader.readAsDataURL(file);
  };

  const addPhoneNumberInput = () => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumbers: [...prevData.phoneNumbers, ''],
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
      emailIds: [...prevData.emailIds, ''],
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

  const handleTagInputChange = (e) => {
    const value = e.target.value;
    const newTags = value.split(',').map((tag) => tag.trim());
    setTags(newTags);
    setFormData((prevData) => ({
      ...prevData,
      tags: tags,
    }));
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
              <tr>
                <td><label htmlFor="facebookLink">Facebook:</label></td>
                <td>
                  <input
                    type="text"
                    id="facebookLink"
                    placeholder="Enter Facebook URL"
                    className='inpt'
                    value={formData.facebookLink}
                    onChange={(e) => handleSocialMediaLinkChange(e, 'facebookLink')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="twitterLink">Twitter:</label></td>
                <td>
                  <input
                    type="text"
                    id="twitterLink"
                    placeholder="Enter Twitter URL"
                    className='inpt'
                    value={formData.twitterLink}
                    onChange={(e) => handleSocialMediaLinkChange(e, 'twitterLink')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="instagramLink">Instagram:</label></td>
                <td>
                  <input
                    type="text"
                    id="instagramLink"
                    placeholder="Enter Instagram URL"
                    className='inpt'
                    value={formData.instagramLink}
                    onChange={(e) => handleSocialMediaLinkChange(e, 'instagramLink')}
                  />
                </td>
              </tr>
              <tr>
                <td><label>Shop Open Days:</label></td>
                <td>
                  <div className='open-days'>
                    {Object.keys(formData.openDays).map((day) => (
                      <label key={day}>
                        <input
                          type="checkbox"
                          checked={formData.openDays[day]}
                          onChange={() => toggleOpenDay(day)}
                        />
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </label>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="openingTime">Opening Time:</label></td>
                <td>
                  <input
                    type="time"
                    id="openingTime"
                    className='inpt'
                    value={formData.openingTime}
                    onChange={(e) => handleInputChange(e, 'openingTime')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="closingTime">Closing Time:</label></td>
                <td>
                  <input
                    type="time"
                    id="closingTime"
                    className='inpt'
                    value={formData.closingTime}
                    onChange={(e) => handleInputChange(e, 'closingTime')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="refundPolicy">Refund Policy:</label></td>
                <td>
                  <textarea
                    id="refundPolicy"
                    placeholder="Enter your refund policy"
                    className='inpt textbox'
                    value={formData.refundPolicy}
                    onChange={(e) => handleInputChange(e, 'refundPolicy')}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="returnPolicy">Return Policy:</label></td>
                <td>
                  <textarea
                    id="returnPolicy"
                    placeholder="Enter your return policy"
                    className='inpt textbox'
                    value={formData.returnPolicy}
                    onChange={(e) => handleInputChange(e, 'returnPolicy')}
                  />
                </td>
                </tr>
                <tr>
                <td><label htmlFor="tags">Tags:</label></td>
                <td>
                  <input
                    type="text"
                    id="tags"
                    placeholder="Enter tags separated by commas"
                    className='inpt'
                    value={tags.join(', ')} // Display current tags as a comma-separated string
                    onChange={handleTagInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="category">Category:</label></td>
                <td>
                  <select
                    id="category"
                    className="inpt"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    <option value="Clothing and Fashion">Clothing and Fashion</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Art and Crafts">Art and Crafts</option>
                    <option value="Tech">Tech</option>
                    <option value="Antiques">Antiques</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default Page;

