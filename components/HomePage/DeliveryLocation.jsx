'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './DeliveryLocation.css'

function DeliveryLocation() {
  const geoApiKey = process.env.GEOAPIFY_API_KEY;
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  async function getSuggestions(address) {
    try {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=a002422b48cc40f4afbeda869f4a476f`
      );
      setSuggestions(response.data.features);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="suggestions-container">
      <input
        className="input-field"
        placeholder="Enter location"
        onChange={(e) => {
          setInputValue(e.target.value);
          getSuggestions(e.target.value);
        }}
      />
      <div className="suggestions">
        {suggestions.map((suggestion) => (
          <div className="suggestion">
            {`${suggestion.properties.address_line1}, ${suggestion.properties.address_line2}, ${suggestion.properties.state}, ${suggestion.properties.country}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryLocation;
