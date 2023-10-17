'use client'
import React, { useState, useEffect } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/Ai';
import { Tooltip } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client';

function page () {
  const searchParams = useSearchParams();
  const { user, error, isLoading } = useUser();
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const storeid = searchParams.get('storeid');

  const [formData, setFormData] = useState({
    userid: user,
    storeid: storeid,
    productName: '',
    productid: '',
    description: '',
    Availability: {
      instock: false,
      outofstock: false,
    },
    price,
    tags: [],
    images: [],
    category: '',
  });

  const submitForm = () => {
    fetch('/api/create/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Product added successfully');
        } else {
          alert('Failed to add a product');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
    setTags(newTags);
    setFormData((prevData) => ({
      ...prevData,
      tags: tags,
    }));
  };

  const toggleAvailability = (Availability) => {
    setFormData((prevData) => ({
      ...prevData,
      Availability: {
        ...prevData.Availability,
        [Availability]: !prevData.Availability[Availability],
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
            name="productid"
            placeholder='Product ID'
            onChange={handleInputChange}
            className='product-name-input'
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
          {Object.keys(formData.Availability).map((Availability) => (
            <label key={Availability}>
              <input
                type="checkbox"
                checked={formData.Availability[Availability]}
                onChange={() => toggleAvailability(Availability)}
              />
              {Availability.charAt(0).toUpperCase() + Availability.slice(1)}
            </label>
          ))}
        </div>
        <button className="sbt-btn" onClick={submitForm}>Submit</button>
      </div>
  );
}

export default page;