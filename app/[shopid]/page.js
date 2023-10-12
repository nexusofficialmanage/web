'use client'
import React, { useState } from 'react'
import './page.css'
import Description from '@/components/ShopPage/Description';
import Overview from '@/components/ShopPage/Overview';
import ContactDetails from '@/components/ShopPage/ContactDetails';
import Reviews from '@/components/ShopPage/Reviews';
import Photos from '@/components/ShopPage/Photos';

function page() {

  const [detail, setDetail] = useState("overview");

  return (
    <div className='shoppage'>
      <div className='firstsection'>
        <div className='shopinfobanner'>
          <div className='shopname'>My Shop</div>
          <div className='shopdesc'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
          <div className='shopnow'> Shop Now</div>
        </div>
        <div className='bannerimage'>
          <img src='assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg'/>
        </div>
      </div>
      <div>
        <div className='shopinfo'>
          <div className='shopinfoshopname'>My Shop</div>
          <div className='tags'>
            <div className='tag'>Information</div>
            <div className='tag'>Technology</div>
          </div>
        </div>
        <div className='detailstoggle'>
          <div className='detail' onClick={() => {setDetail('overview')}}>Overview</div>
          <div className='detail' onClick={() => {setDetail('description')}}>Description</div>
          <div className='detail' onClick={() => {setDetail('contactdetails')}}>Contact Details</div>
          <div className='detail' onClick={() => {setDetail('reviews')}}>Reviews</div>
          <div className='detail' onClick={() => {setDetail('photos')}}>Photos</div>
        </div>
        <div className='detailview'>
          {detail == "description" && <Description />}
          {detail == "Overview" && <Overview />}
          {detail == "contactdetails" && <ContactDetails />}
          {detail == "reviews" && <Reviews />}
          {detail == "photos" && <Photos />}
        </div>
      </div>
    </div>
  )
}

export default page
