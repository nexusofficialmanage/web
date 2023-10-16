'use client';
import React, { useState } from 'react';
import './page.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/ShopPage/ProductCard';

function Page() {

  const products = [{name: 'Jeevan', rating: 4.2}, {name: 'Alexen', rating: 3.9}];

  return (
    <div className="shop">
      <div className="banner">
        <div className="bannerinfo">
          <div className="bannershopname">Nexus</div>
          <div className="bannershoptagline">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus massa nec vulputate condimentum. Nam ornare ullamcorper placerat. Etiam semper eros et tincidunt fringilla. Nunc luctus libero et justo aliquam tempor. Sed sodales vulputate dolor, in convallis ex fermentum eleifend. Nunc mauris est, mattis ac risus auctor, sollicitudin molestie ante. Nam suscipit venenatis tellus et rhoncus. Nulla eu suscipit leo. Cras eu fermentum quam, placerat vehicula ipsum. Nam elementum augue eu consectetur tempor. Integer consectetur sapien vel lacinia semper. Quisque at ex eget erat pretium scelerisque eu nec leo.
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
              <strong>Address:</strong> 123 Main Street<br />
              <strong>City:</strong> New York<br />
              <strong>State:</strong> NY<br />
              <strong>Country:</strong> USA
            </p>
          </div>
          <div className='contact-details'>
            <div className='phone'>
              <h3>Phone Numbers:</h3>
              <ul>
                <li>+1 (123) 456-7890</li>
                <li>+1 (987) 654-3210</li>
              </ul>
            </div>
            <div className='email'>
              <h3>Email Addresses:</h3>
              <ul>
                <li>info@example.com</li>
                <li>support@example.com</li>
              </ul>
            </div>
            <div className='social-media'>
              <h3>Social Media:</h3>
              <ul>
                <li>
                  <a href='https://www.facebook.com/shop'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='https://www.twitter.com/shop'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/shop'>
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
