'use client';
import React, { useState } from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { Tooltip } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { color } from 'framer-motion';

function Page() {
  const searchParams = useSearchParams();
  const { user, error, isLoading } = useUser();
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const ratings = [0, 1, 2, 3, 4, 5];
  const [sizes, setSizes] = useState([]);
  const [colors, setColor] = useState([]);
  const [features, setFeatures] = useState([]);
  const storeid = searchParams.get('storeid');
  const size_chart = {
    'S': 'Small',
    'M': 'Medium',
    'L': 'Large',
    'XL': 'Extra Large',
    'XXL': 'Extra Extra Large',
    'XXXL': 'Extra Extra Extra Large',
  };
  const color_chart = {
    'red': 'Red',
    'green': 'Green',
    'blue': 'Blue',
    'yellow': 'Yellow',
    'black': 'Black',
    'white': 'White',
    'orange': 'Orange',
    'purple': 'Purple',
    'pink': 'Pink',
    'brown': 'Brown',
    'grey': 'Grey',
  };

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
    brand: '',
    features: [],
    colors: [],
    sizeVariants: [],
    reviews: []
  });

  const submitForm = async() => {
    console.log(formData);
    await fetch('/api/create/product', {
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

  const handleFeaturesChange = (e) => {
    const value = e.target.value;
    setFeatures(value.split(',').map((feature) => feature.trim()));
    setFormData((prevData) => ({
      ...prevData,
      features: features,
    }));
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

  const toggleSize = (size) => {
    const updatedSizes = sizes.includes(size)
      ? sizes.filter((s) => s !== size)
      : [...sizes, size];
    setSizes(updatedSizes);
    setFormData((prevData) => ({
      ...prevData,
      sizeVariants: sizes,
    }));
  };

  const toggleColors = (color) => {
    const updatedColors = colors.includes(color)
      ? colors.filter((s) => s !== color)
      : [...colors, color];
    setColor(updatedColors);
    setFormData((prevData) => ({
      ...prevData,
      colors: colors,
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
  };

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

      <div className='product-brand'>
        <input 
          type="text"
          name="brand"
          placeholder='Product Brand'
          onChange={handleInputChange}
          className='product-name-input'
        />
      </div>
      
        <div className='product-id'>
        <Tooltip content='Give a unique product id' className='tooltip'>
          <input 
              type="text"
              name="productId"
              placeholder='Product Id'
              onChange={handleInputChange}
              className='product-id-input'
            />
        </Tooltip>
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
        <Tooltip content='Give the cost of this particular product' className='tooltip'>
          <input 
            placeholder='Price'
            type='number'
            name="price"
            onChange={handleInputChange}
            className='product-description-input'
          />
        </Tooltip>
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
        <div className='product-available'>Availability: 
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

        <div className='sizes-available'>Size: 
          {Object.keys(size_chart).map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                checked={sizes.includes(size)}
                onChange={() => toggleSize(size)}
              />
              {size}
            </label>
          ))}
        </div>

        <div className='colors-available'>Colors: 
          {Object.keys(color_chart).map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                checked={colors.includes(color)}
                onChange={() => toggleColors(color)}
              />
              {color}
            </label>
          ))}
        </div>
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

      <div className='product-features'>
        <input 
          type="text"
          placeholder='Product Features (comma-separated)'
          onChange={handleFeaturesChange}
          className='product-features-input'
        />
      </div>

      <button className="sbt-btn" onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Page;
