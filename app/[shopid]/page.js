'use client'
import '../globals.css'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";
import './page.css'
import { CiLocationOn } from 'react-icons/Ci';

function page() {
    const searchParams = useSearchParams();
    const shopid = searchParams.get('shopid');
    const [shopInformation, setShopInformation] = useState(); 
    const [images, setImages] = useState(['/assests/images/nature-landscape-hd-usqznq19dscdjkf8.jpg', '/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg']);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      // Set up a timer to automatically advance the slideshow
      if (images.length > 0) {
        const interval = setInterval(() => {
          console.log(currentIndex);
          console.log(images.length);
          console.log(images);
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Change the duration (in milliseconds) as needed
    
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
      }
    }, [images, currentIndex]);

    useEffect(() => {
      try{
        const response = axios.get(`/api/shop/details/${shopid}`);
        setShopInformation(response.data);
      }
      catch(error){
        console.log(error);
      }
    }, [])

  return (
    <div className='shoppage'>
      <div className='shopmaininfo'>
        <div className='shopmaininfofirstsection'>
          <div className='shopname'> My Shop </div>
          <div className='shoplocation'> 
            <CiLocationOn/>
            <div>Shop Location</div>
          </div>
        </div>
        {/* <div className='shopmaininfosecondsection'>

        </div> */}
      </div>
      <div className='bannersection'>
        <div className='imagealternator'>
            {images.length === 0 ? (
              <img src="/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg" alt="Default" className="default-image" />
            ) : (
              <img
              key={Number(currentIndex)}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              // onClick={() => changeImage(index)}
              />
            )}
          </div>
          <div className='bannersectionsubsection'>
            <div className='shopdescription'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque fringilla bibendum justo, ac luctus ante placerat a. 
              Duis id facilisis velit, vel placerat ipsum. Maecenas molestie ullamcorper ex, in venenatis odio. 
            </div>
            <div className='contactdetails'>
              <div>Email ID: jeevanalexenkavalam@gmail.com</div>
              <div>Phone number: 8921655405</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default page
