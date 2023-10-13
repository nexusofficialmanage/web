'use client'
import React, { useEffect, useState } from 'react'
import './page.css'
import Description from '@/components/ShopPage/Description';
import Overview from '@/components/ShopPage/Overview';
import ContactDetails from '@/components/ShopPage/ContactDetails';
import Reviews from '@/components/ShopPage/Reviews';
import Photos from '@/components/ShopPage/Photos';
import axios from 'axios';

function page({shop}) {
  const [detail, setDetail] = useState("overview");
  const [shopDetails, setShopDetails] = useState();

  const getShopData = async () => {
    const storeid = localStorage.getItem('storeid');
    const response = await axios.get(`/api/display/shop/${storeid}`)
    setShopDetails(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getShopData();
  }, [])

  return (
    <div className='shoppage'>
      <div className='firstsection'>
        <div className='shopinfobanner'>
          <div className='shopname'>{shopDetails?.shopName}</div>
          <div className='shopdesc'>{shopDetails?.shopTagline}</div>
          <div className='shopnow'> Shop Now</div>
        </div>
        <div className='bannerimage'>
          <img src='assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg'/>
        </div>
      </div>
      <div>
        <div className='shopinfo'>
          <div className='shopinfoshopname'>{shopDetails?.shopName}</div>
          <div className='tags'>
            {
              shop?.tag.map((tag) => {
                return <div className='tag'>{tag}</div>
              })
            }
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
          {detail == "description" && <Description description={shopDetails?.description}/>}
          {detail == "overview" && <Overview />}
          {detail == "contactdetails" && <ContactDetails />}
          {detail == "reviews" && <Reviews />}
          {detail == "photos" && <Photos images={shopDetails?.images}/>}
        </div>
      </div>
    </div>
  )
}

export default page
