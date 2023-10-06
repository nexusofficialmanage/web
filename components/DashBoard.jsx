'use client';

import React from 'react'
import Link from 'next/link';
import UserLogoDropDown from './UserLogoDropDown';
import 'tailwindcss/tailwind.css';

function DashBoard() {
  return (
    <div className='flex flex-column justify-between border border-black p-2'>
      <div className='text-2xl font-bold companyname'>
        Nexus
      </div>
      <div className='flex flex-row items-center text-lg font-bold text-black dashboardlinks'>
        <div className='btn mr-4'>View Cart</div>
        <Link href='/api/auth/login' className='btn mr-4'>Login</Link>
        <UserLogoDropDown className='userlogo' />
      </div>
    </div>
  );
}

export default DashBoard;
