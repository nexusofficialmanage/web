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
          <div className="shopnowbutton"><a href='#shopnow'>Shop Now</a></div>
        </div>
        <div className="bannerimage">
          <img src="/assests/images/castle.jpg" className="zoomIn" alt="Castle" />
        </div>
        <div className='viewcards'>
        <div className='viewcard'>
            <a href='#description'>
              <div>Description</div>
              <div className='viewcarddes'>Learn More about us</div>
            </a>
          </div>
          <div className='viewcard'>
            <div>Review</div>
            <div className='viewcarddes'>Enter our Review system to rate this shop and read other's reviews</div>
          </div>
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
