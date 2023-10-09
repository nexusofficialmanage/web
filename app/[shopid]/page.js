'use client'
import '../globals.css'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";
import './page.css'
import { CiLocationOn } from 'react-icons/Ci';
import {Accordion, AccordionItem} from "@nextui-org/react";
import ContactDetails from '@/components/ShopPage/ContactDetails';

function page() {
    const searchParams = useSearchParams();
    const shopid = searchParams.get('shopid');
    const [shopInformation, setShopInformation] = useState(); 
    const [images, setImages] = useState(['/assests/images/nature-landscape-hd-usqznq19dscdjkf8.jpg', '/assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [contactDetailsPopup, setContactDetailsPopup] = useState(false);

    useEffect(() => {
      // Set up a timer to automatically advance the slideshow
      if (images.length > 0) {
        const interval = setInterval(() => {
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

    const handleViewContactDetails = () => {
      console.log('hello')
      setContactDetailsPopup(contactDetailsPopup^1);
    }

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
          <div className='bannersectionsubsection first'>
            <div className='shopdescription'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque fringilla bibendum justo, ac luctus ante placerat a. 
              Duis id facilisis velit, vel placerat ipsum. Maecenas molestie ullamcorper ex, in venenatis odio. 
            </div>
            <div className='contactdetails' onClick={handleViewContactDetails}>
              <div>Email ID: jeevanalexenkavalam@gmail.com</div>
              <div>Phone number: 8921655405</div>
            </div>
          </div>

          <div className='bannersectionsubsection second'>
            <div className='shoptitle'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque fringilla bibendum 
            </div>
            <div className='contactdetailspress' onClick={handleViewContactDetails}>
              Contact Details
            </div>
          </div>
          
      </div>
      <ContactDetails view ={contactDetailsPopup} onClose={handleViewContactDetails}/>
    </div>
  )
}

export default page
