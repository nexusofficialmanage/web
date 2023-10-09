'use client';

import React from 'react'
import './Home.css'
import Hero from './Hero';
import ShopCard from './ShopCard';
import ShopData from "./data/ShopData";

const Home = () => {
  const data = (val, i) => {
    return (
      <>
      {val.template && val.events_on && val.event_name ? <ShopCard
        template={val.template}
        events_on={val.events_on}
        event_name={val.event_name}
        event_para={val.event_para}
      /> : <div className = "_message"><h6>No Shops Available</h6></div>
  }
      </>
    );
  };


  return (
    <div className='Hero'>
        <Hero/>
        <div className="shops-container">
          <div className="container">
            <h1>Shops Nearby</h1>
              <div className="cards">
                {ShopData.map(data)}
              </div>

              <button className="view-btn">View all</button>
          </div>
          
          <div className="container">
            <h1>Recommended Shops</h1>
              <div className="cards">
                {ShopData.map(data)}
              </div>

              <button className="view-btn">View all</button>
          </div>
        </div>

        <div className='search-shop'>
          <h1 className='search-shop-title'>Search By Shops</h1>
          <input className="search-shop-place" type="text"
          placeholder="Enter item or shop you are looking for"
          />
          <button className='search-btn'>Search</button>
        </div>

        <div className='whats-on-your-mind-section'>
          <h1>Whats on your mind?</h1>
          <div className='whats-on-your-mind'>
            <img src="https://github.com/nexusofficialmanage/web/blob/main/public/assests/images/dosa.png?raw=true" width="60%" height="60%" alt="" />
            <img src="https://github.com/nexusofficialmanage/web/blob/main/public/assests/images/dosa.png?raw=true" width="60%" height="60%" alt="" />
            <img src="https://github.com/nexusofficialmanage/web/blob/main/public/assests/images/dosa.png?raw=true" width="60%" height="60%" alt="" />
            <img src="https://github.com/nexusofficialmanage/web/blob/main/public/assests/images/dosa.png?raw=true" width="60%" height="60%" alt="" />
            <img src="https://github.com/nexusofficialmanage/web/blob/main/public/assests/images/dosa.png?raw=true" width="60%" height="60%" alt="" />
            <img src="https://github.com/nexusofficialmanage/web/blob/main/public/assests/images/dosa.png?raw=true" width="60%" height="60%" alt="" />
          </div>
        </div>

        <div className="container">
            <h1>Personalized Recommendations</h1>
              <div className="cards">
                {ShopData.map(data)}
              </div>

              <button className="view-btn">View all</button>
        </div>

    </div>
  )
}

export default Home