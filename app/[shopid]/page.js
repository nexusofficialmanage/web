'use client';
import React, { useEffect, useState } from 'react';
import './page.css';
import ProductCard from '@/components/ShopPage/ProductCard';
import axios from 'axios';
import { usePathname } from 'next/navigation';

function Page() {
  const pathname = usePathname();
  const [shop, setShop] = useState({});
  const products = [{name: 'Jeevan', rating: 4.2}, {name: 'Alexen', rating: 3.9}];

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
          <img src="/assests/images/indiankirana.jpg" className="zoomIn" alt="Castle" />
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
          <div className='descriptionimage'><img src='/assests/images/descriptionvector1.png'/></div>
        </div>
        <div className='contactdetails'>
        <div className='contactdetailsvector'>
          <img src='/assests/images/contactdetailsvector1.png'/>
        </div>
        <div className='contactinfo' id='contactus'>
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
