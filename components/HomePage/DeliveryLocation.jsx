'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './DeliveryLocation.css'

function DeliveryLocation() {
  const geoApiKey = process.env.GEOAPIFY_API_KEY;
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [pressedValue, setPressedValue] = useState("");

  async function getSuggestions(address) {
    try {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=a002422b48cc40f4afbeda869f4a476f`
      );
      setSuggestions(response.data.features);
      console.log(response.data.features)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="suggestions-container">
      <input
        className="input-field"
        type='text'
        value={pressedValue}
        onChange={(e) => {
          setPressedValue(e.target.value)
          setInputValue(e.target.value);
          getSuggestions(e.target.value);
        }}
        placeholder="Enter your location"
      />
      <div className="suggestions">
        {suggestions.map((suggestion) => {
          return <div className="suggestion" onClick={() => {
                    setPressedValue(`${suggestion.properties.address_line1}, ${suggestion.properties.address_line2}, ${suggestion.properties.state}, ${suggestion.properties.country}`)
                   }}>
                    {`${suggestion.properties.address_line1}, ${suggestion.properties.address_line2}, ${suggestion.properties.state}, ${suggestion.properties.country}`}
                  </div>
        })}
      </div>
    </div>
  );
}

export default DeliveryLocation;
