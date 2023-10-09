'use client'
import '../globals.css'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";
import DashBoard from '@/components/DashBoard';

function page() {
    const searchParams = useSearchParams();
    const shopid = searchParams.get('shopid');
    const [shopInformation, setShopInformation] = useState(); 

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
    <div>
      <DashBoard />
      
    </div>
  )
}

export default page
