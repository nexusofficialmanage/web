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
    const [images, setImages] = useState([]);

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
        <div className='shopmaininfosecondsection'>

        </div>
      </div>
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
    </div>
  )
}

export default page
