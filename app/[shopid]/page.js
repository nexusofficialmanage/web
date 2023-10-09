'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";

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
      
    </div>
  )
}

export default page
