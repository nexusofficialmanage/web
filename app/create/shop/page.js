'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation';

function page() {

  const searchParams = useSearchParams();
  const userId = searchParams.get('userid');

  return (
    <div>
      <div className='bannercreateshop'>

      </div>
      <div className='flex flex-column'>
        <input placeholder="Enter the Shop's name"/>
        <input placeholder="Enter Address Line 1"/>
        <input placeholder="Enter Address Line 2"/>
        <input placeholder="Enter Pincode"/>
        <input placeholder="Enter City"/>
        <input placeholder="Enter State"/>
        <input placeholder="Enter Country"/>
      </div>
    </div>
  )
}

export default page