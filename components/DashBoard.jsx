'use client';

import React from 'react'
import './DashBoard.css'
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { BiUserCircle } from "react-icons/lia";

function DashBoard() {

  const { user, error, isLoading } = useUser();

  return (
    <div className='dashboard'>
      <div className='companyname btn'> Nexus </div>
      <div className='dashboardlinks'>
        <div className='btn'> View Cart </div>
        <Link href='/api/auth/login' className='btn'> Login </Link>
        {user ?  <img src={user.picture} alt='user-img' className='userlogo'/> : <></>}
      </div>
    </div>
  )
}

export default DashBoard
