'use client';
import React, { useState } from 'react';
import './page.css';
import Description from '@/components/ShopPage/Description';
import Review from '@/components/ShopPage/Review';
import ProductCard from '@/components/ShopPage/ProductCard';

function Page() {

  const products = [{name: 'Jeevan', rating: 4.2}, {name: 'Alexen', rating: 3.9}];

  return (
    <div className="shop">
      <div className="banner">
        <div className="bannerinfo">
          <div className="bannershopname">Nexus</div>
          <div className="bannershoptagline">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
          <div className="shopnowbutton">Shop Now</div>
        </div>
        <div className="bannerimage">
          <img src="/assests/images/shopimage.jpg" className="zoomIn" alt="Castle" />
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
      <div className='products'>
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
