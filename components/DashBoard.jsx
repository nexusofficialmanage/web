'use client';

import React from 'react'
import './DashBoard.css'
import { useUser } from '@auth0/nextjs-auth0/client';
import UserLogoDropDown from './UserLogoDropDown';
import { useRouter } from 'next/navigation';

function DashBoard() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login")
  }

  return (
    <div className='dashboard'>
      <div className='companyname btn'> Nexus </div>
      <div className='dashboardlinks'>
        <div className='btn'> View Cart </div>
        {!user && <div onClick={handleLogin} className='btn'> Login </div>}
        <div className='btn'><UserLogoDropDown /></div>
      </div>
    </div>
  )
}

export default DashBoard
