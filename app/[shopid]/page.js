'use client'
import React, { useEffect, useState } from 'react'
import './page.css'
import { useRouter } from 'next/navigation';
import Description from '@/components/ShopPage/Description';
import Overview from '@/components/ShopPage/Overview';
import ContactDetails from '@/components/ShopPage/ContactDetails';
import Reviews from '@/components/ShopPage/Reviews';
import Photos from '@/components/ShopPage/Photos';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function page({shop}) {
  const router = useRouter();
  const [detail, setDetail] = useState("overview");
  const [shopDetails, setShopDetails] = useState();

  

  const handleGoToAddProduct = () => {
    const storeid = localStorage.getItem('storeid');
    router.push(`/create/product?${storeid}`);
  }

  const getShopData = async () => {
    const storeid = localStorage.getItem('storeid');
    const response = await axios.get(`/api/display/shop/${storeid}`)
    setShopDetails(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    const shopDetail = async() => {
      const response = await axios.get(`/api/display/shop${pathname}`);
      console.log(response.data);
      setShop(response.data);
    }

    shopDetail();

  }, [])

  return (
    <div className="shop">
      <div className="banner">
        <div className="bannerinfo">
          <div className="bannershopname">{shop?.shopName}</div>
          <div className="bannershoptagline">{shop?.shopTagline}</div>
          <a href='#shopnow' className='shopnowbutton'>Shop Now</a>
        </div>
        <div className="bannerimage">
          <img src="/assests/images/castle.jpg" className="zoomIn" alt="Castle" />
        </div>
        <div className='viewcards'>
          <a href='#description' className='viewcard'>
              <div>Description</div>
              <div className='viewcarddes'>Learn More about us</div>
          </a>
          <div className='viewcard'>
            <div>Review</div>
            <div className='viewcarddes'>Enter our Review system to rate this shop and read other's reviews</div>
          </div>
          <a href='#contactus' className='viewcard'>
              <div>Contact Us</div>
              <div className='viewcarddes'>Wanna Get In Touch?</div>
          </a>
        </div>
      </div>
      <div className='shopdetails'>
        <div className='descriptiondetails' id='description'>
          <div className='descriptiondetailswriting'>
            <div className='descriptiondetailstitle'>Here is a little bit about <span style={{color:'red'}}>Ourselves</span></div>
            <div className='descriptiondetailstext'>
              {shop?.description}
            </div>
          </div>
          <div className='contactinfo'>
            <div className='address'>
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong> {shop?.addressLine} <br />
                <strong>City:</strong> {shop?.city} <br />
                <strong>State:</strong> {shop?.state}<br />
                <strong>Country:</strong> {shop?.country}
              </p>
              <div className='phone'>
                <h3>Phone Numbers:</h3>
                <ul>
                  {shop.phoneNumbers && shop.phoneNumbers.map((phoneNumber) => {
                    return <li>{phoneNumber}</li>
                  })}
                </ul>
              </div>
              <div className='email'>
                <h3>Email Addresses:</h3>
                <ul>
                  {shop.emailIds && shop.emailIds.map((emailId) => {
                    return <li>{emailId}</li>
                  })}
                </ul>
              </div>
              <div className='social-media'>
                <h3>Social Media:</h3>
                <ul>
                  <li>
                    <a href={shop?.facebookLink}>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href={shop?.twitterLink}>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href={`https://www.instagram.com/${shop?.instagramLink}`}>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleGoToAddProduct}>Add a product</button>
        </div>
      <div className='products' id='shopnow'>
        {
          products.map((product) => {
            return <ProductCard product={product}/>
          })
        }
      </div>
    </div>
  );
}

export default Page;
