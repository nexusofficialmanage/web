'use client'
import React, { useState, useEffect } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { Tooltip } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client';

function page () {
  const searchParams = useSearchParams();
  const { user, error, isLoading } = useUser();
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const ratings = [0, 1, 2, 3, 4, 5];
  const storeid = searchParams.get('storeid');
  console.log(storeid);

  const [formData, setFormData] = useState({
    storeid: storeid,
    productName: '',
    productId: '',
    tags: [],
    availability: {
      instock: false,
      outofstock: false,
    },
    price: 0,
    description: '',
    category: '',
    rating: 0,
    images: [],
  });

  const submitForm = () => {
    console.log(formData);
    fetch('/api/create/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert('Product added successfully');
        } else {
          alert('Failed to add a product');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleRatingChange = (e) => {
    const name = e.target.name;
    setRating(parseInt(e.target.value, 10));
    const value = parseInt(e.target.value, 10);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleTagInputChange = (e) => {
    const value = e.target.value;
    const newTags = value.split(',').map((tag) => tag.trim());
    setFormData((prevData) => ({
      ...prevData,
      tags: newTags,
    }));
  };

  const toggleAvailability = (availability) => {
    setFormData((prevData) => ({
      ...prevData,
      availability: {
        ...prevData.availability,
        [availability]: !prevData.availability[availability],
      },
    }));
  };

  return (
      <div className='product-details'>
        <div className='product-images'>
          <input 
            type="file"
            onChange={handleImageUpload}
            multiple
            className='image-upload'
          />
        </div>
        <div className='product-name'>
          <input 
            type="text"
            name="productName"
            placeholder='Product Name'
            onChange={handleInputChange}
            className='product-name-input'
          />
        </div>
        <div className='product-id'>
          <input 
            type="text"
            name="productId"
            placeholder='Product Id'
            onChange={handleInputChange}
            className='product-id-input'
          />
        </div>
        <div className='product-description'>
          <textarea 
            placeholder='Product Description'
            name="description"
            onChange={handleInputChange}
            className='product-description-input'
          />
        </div>
        <div className='product-price'>
          <textarea 
            placeholder='Price'
            name="price"
            onChange={handleInputChange}
            className='product-description-input'
          />
        </div>
        <div className='product-category'>
          <input 
            type="text"
            placeholder='Product Category'
            name="category"
            onChange={handleInputChange}
            className='product-category-input'
          />
        </div>
        <div className='product-tags'>
          <input 
            type="text"
            placeholder='Product Tags'
            onChange={handleTagInputChange}
            className='product-tags-input'
          />
        </div>
        <div className='avail'>
          {Object.keys(formData.availability).map((availability) => (
            <label key={availability}>
              <input
                type="checkbox"
                checked={formData.availability[availability]}
                onChange={() => toggleAvailability(availability)}
              />
              {availability.charAt(0).toUpperCase() + availability.slice(1)}
            </label>
          ))}
        </div>
        <div className='product-rating'>
          <span>Rating:</span>
          {ratings.map((value) => (
            <label key={value}>
              <input
                type='radio'
                value={value}
                checked={rating === value}
                onChange={handleRatingChange}
                name="rating"
              />
              {value}
            </label>
          ))}
        </div>
        <button className="sbt-btn" onClick={submitForm}>Submit</button>
      </div>
  );
}

export default page;