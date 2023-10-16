'use client';
import React, { useState } from 'react';
import './page.css';
import Description from '@/components/ShopPage/Description';
import Review from '@/components/ShopPage/Review';

function Page() {

  return (
    <div className="shop">
      <div className="banner">
        <div className="bannerinfo">
          <div className="bannershopname">Nexus</div>
          <div className="bannershoptagline">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
          <div className="shopnowbutton">Shop Now</div>
        </div>
        <div className="bannerimage">
          <img src="/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg" className="zoomIn" alt="Castle" />
        </div>
        <div className='viewcards'>
          <div className='viewcard'>
            <div>Description</div>
            <div className='viewcarddes'>Learn More about us</div>
          </div>
          <div className='viewcard'>
            <div>Review</div>
            <div className='viewcarddes'>Enter our Review system to rate this shop and read other's reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
